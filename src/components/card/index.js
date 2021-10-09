import React, { useState } from 'react';

import {
    Container
} from './style'

import {
    DragDropContext,
    Droppable,
    Draggable
} from 'react-beautiful-dnd'

export const Card = ({ title, status, dragStart, dragEnd, highlight }) => {

    let [isDraging, setIsDraging] = useState(false);
    let [over, setOver] = useState(false);

    const drag = () => { }


    /*Funções do dragzone*/
    const dragEnter = () => { }

    const dragOver = () => {
        setOver(over = true)
    }

    const dragLeave = () => {
        setOver(over = false)
    }

    const drop = () => { }


    return (
        <Container>
            <div id="title-container"><h3>{title}</h3></div>
            <DragDropContext>
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
                                <Draggable draggableId="card-item-0" index={0}>
                                    {(provided) => {
                                        return (
                                            <div
                                                id="cards"

                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <div id="status"></div>
                                                    Eu sou um card1
                                            </div>

                                        )
                                    }}
                                </Draggable>
                                <Draggable draggableId="card-item-1" index={1}>
                                    {(provided) => {
                                        return (
                                            <div
                                                id="cards"

                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <div id="status"></div>
                                                    Eu sou um card2
                                            </div>

                                        )
                                    }}
                                </Draggable>
                                {provided.placeholder}
                            </div>
                        )
                    }}
                </Droppable>
            </DragDropContext>
        </Container>
    )
}