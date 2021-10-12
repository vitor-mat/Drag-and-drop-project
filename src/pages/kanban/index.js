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


const items = [
    {
        name: "card 1"
    },
    {
        name: "card 2"
    }
]

export const KanbanPage = () => {


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
            <Board
                title="In Progress"
            >
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable
                        droppableId="card-coontainer"
                    >
                        {(provided, snapshot) => {
                            return (
                                <div
                                    id="dropzone-container"
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {
                                        cardListData.map((value, index) => {
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

        </Container>
    )
}