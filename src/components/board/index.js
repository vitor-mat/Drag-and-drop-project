import React from 'react';

import {
    Container
} from './style'

export const Board = ({ title, children }) => {


    return (
        <Container>
            <div id="title-container"><h3>{title}</h3></div>
            {children}
        </Container>
    )
}