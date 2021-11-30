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
            name: "1",
            status: "eventual",
            id: "4865165256"
        },
        {
            name: "2",
            status: "alert",
            id: "64984516"
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
        let add

        if (source.droppableId === destination.droppableId && source.index === destination.index) return;

        if (source.droppableId === destination.droppableId && source.index !== destination.index){
            add = itemsCopy[source.droppableId].items.splice(source.index, 1)
            console.log(add)
            itemsCopy[source.droppableId].items.splice(destination.index, 0, add[0])
        }

        if(source.droppableId !== destination.droppableId){
            add = itemsCopy[source.droppableId].items.splice(source.index, 1)
            itemsCopy[destination.droppableId].items.splice(destination.index, 0, add[0])
        }
        console.log(destination.droppableId)
        setCardListData(itemsCopy)
        
    }

    return (
        <Container>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                {
                    cardListData.map((data, index) => {
                        console.log('mudou')
                        return (
                            <Board
                                title={data.title}
                                key={index}
                            >
                                <Droppable
                                    droppableId={data.id}
                                >
                                    {(provided, snapshot) => {
                                        return (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                                className="dropzone-container"
                                                style={{
                                                    background: snapshot.isDraggingOver ? 'rgba(10, 255, 180, .1)' : ""
                                                }}
                                            >
                                                {
                                                    data.items.map((value, index) => {
                                                        console.log(value.id)
                                                        return (
                                                            <Draggable key={`key${value.id}`} draggableId={value.id} index={index} >
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