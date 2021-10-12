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
        title: "Todo",
        items: [{
            name: "correr na orla",
            status: "eventual"
        }]
    },
    {
        title: "In Progress",
        items: []
    },
    {
        title: "Completed",
        items: []
    }
]

export const KanbanPage = () => {


    let [cardListData, setCardListData] = useState(dataKanban)

    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const itemsCopy = Array.from(cardListData);
        const [reorderedItem] = itemsCopy.splice(result.source.index, 1);
        itemsCopy.splice(result.destination.index, 0, reorderedItem);

        setCardListData(itemsCopy);
    }

    return (
        <Container>
            {
                cardListData.map((data, index) => {
                    return (
                        <Board
                            title={data.title}
                        >
                            <DragDropContext onDragEnd={handleOnDragEnd}>
                                <Droppable
                                    droppableId="card-container"
                                >
                                    {(provided, snapshot) => {
                                        return (
                                            <div
                                                id="dropzone-container"
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                            >
                                                {
                                                    data.items.map((value, index) => {
                                                        return (
                                                            <Draggable key={`key${index}`} draggableId={`card-item-${index}`} index={index} >
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
                            </DragDropContext>
                        </Board>
                    )
                })
            }
        </Container>
    )
}