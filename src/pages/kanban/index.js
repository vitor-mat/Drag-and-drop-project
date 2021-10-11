import React, { useState } from 'react';

import { Board } from '../../components/card/index'

import {
    DragDropContext
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
            <DragDropContext>
                <Board
                    title="Todo"
                    description="Next Level Week"
                    status="urgent"
                />
                <Board
                    title="In Progress"
                    description="Next Level Week"
                    status="alert"
                />
                <Board
                    title="Done"
                    description="Next Level Week"
                />
            </DragDropContext>
        </Container>
    )
}