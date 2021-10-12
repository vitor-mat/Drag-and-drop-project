import React, { useState } from 'react';

import {
    Container
} from './style'

import {
    Droppable,
    Draggable
} from 'react-beautiful-dnd'

const cardListData = [
    {
        name: "card 1"
    },
    {
        name: "card 2"
    }
]

export const Board = ({ title, children }) => {


    return (
        <Container>
            <div id="title-container"><h3>{title}</h3></div>
            {children}
        </Container>
    )
}