import React, { useState } from 'react';

import {
    Container
} from './style'

import {
    Droppable,
    Draggable
} from 'react-beautiful-dnd'

export const Board = ({ title, status, dragStart, dragEnd, highlight }) => {


    return (
        <Container>
            <div id="title-container"><h3>{title}</h3></div>
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
                                /*
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
                                    */
                            }
                            {provided.placeholder}
                        </div>
                    )
                }}
            </Droppable>
        </Container>
    )
}