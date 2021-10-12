import React, { useState } from 'react';

import { Board } from '../../components/board/index'
import { Card } from '../../components/card/index';


import {
    DragDropContext,
    Droppable,
    Draggable
} from 'react-beautiful-dnd';

import {
    Container
} from './style';


const dataKanban = [
    {
        id: "0",
        title: "Todo",
        items: [{
            name: "correr na orla",
            status: "eventual",
            id: (Math.random() * 1000000000).toString()
        },
        {
            name: "ler um livro",
            status: "alert",
            id: (Math.random() * 1000000000).toString()
        }]
    },
    {
        id: "1",
        title: "In-Progress",
        items: []
    },
    {
        id: "2",
        title: "Completed",
        items: []
    }
]

export const KanbanPage = () => {


    let [cardListData, setCardListData] = useState(dataKanban)

    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const { source, destination } = result;

        const itemsCopy = Array.from(cardListData);

        if (source.droppableId != destination.droppableId) {
           
            const [reorderedItem] = itemsCopy[source.droppableId].items.splice(source.index, 1);

            itemsCopy[destination.droppableId].items.splice(destination.index, 0, reorderedItem);
           
            console.log(itemsCopy)

            setCardListData(itemsCopy);

            return;
        }

        const [reorderedItem] = itemsCopy[source.droppableId].items.splice(source.index, 1);
        itemsCopy[source.droppableId].items.splice(destination.index, 0, reorderedItem);

        setCardListData(itemsCopy);
    }

    return (
        <Container>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                {
                    cardListData.map((data, index) => {
                        return (
                            <Board
                                title={data.title}
                                key={data.id}
                            >
                                <Droppable
                                    droppableId={data.id}
                                >
                                    {(provided, snapshot) => {
                                        return (
                                            <div
                                                id="dropzone-container"
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                style={{
                                                    background: snapshot.isDraggingOver ? 'rgba(10, 255, 180, .1)' : ""
                                                }}
                                            >
                                                {
                                                    data.items.map((value, index) => {
                                                        return (
                                                            <Draggable key={`key${index}`} draggableId={value.id.toString()} index={index} >
                                                                {
                                                                    (provided) => {
                                                                        return (
                                                                            <span
                                                                                ref={provided.innerRef}
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps}
                                                                            >
                                                                                <Card
                                                                                    title={value.name}
                                                                                    status={value.status}
                                                                                />
                                                                            </span>
                                                                        )
                                                                    }
                                                                }
                                                            </Draggable>
                                                        )
                                                    })
                                                }
                                                {provided.placeholder}
                                            </div>
                                        )
                                    }}
                                </Droppable>
                            </Board>
                        )
                    })
                }
            </DragDropContext>
        </Container>
    )
}