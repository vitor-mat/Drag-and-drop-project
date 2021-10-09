import React, { useState } from 'react';

import {
    Container
} from './style'

import {
    DragDropContext,
    Droppable,
    Draggable
} from 'react-beautiful-dnd'

const items = [
    {
        name: "card 1"
    },
    {
        name: "card 2"
    }
]

export const Card = ({ title, status, dragStart, dragEnd, highlight }) => {

    let [isDraging, setIsDraging] = useState(false);
    let [over, setOver] = useState(false);

    let [cardListData, setCardListData] = useState(items)

    function handleOnDragEnd(result) {
        if (!result.destination) return;
        
        const itemsCopy = Array.from(cardListData);
        const [reorderedItem] = itemsCopy.splice(result.source.index, 1);
        itemsCopy.splice(result.destination.index, 0, reorderedItem);

        setCardListData(itemsCopy);
    }

    return (
        <Container>
            <div id="title-container"><h3>{title}</h3></div>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable
                    droppableId="card-coontainer"
                >
                    {(provided) => {
                        return (
                            <div
                                id="dropzone-container"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {
                                    cardListData.map((value, index) => {
                                        return (
                                            <Draggable draggableId={`card-item-${index}`} index={index}>
                                                {(provided) => {
                                                    return (
                                                        <div
                                                            id="cards"

                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            <div id="status"></div>
                                                            {value.name}
                                                        </div>

                                                    )
                                                }}
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
        </Container>
    )
}