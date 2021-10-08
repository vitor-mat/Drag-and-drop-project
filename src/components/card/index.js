import React from 'react';

import {
    Container
    } from './style'

export const Card = ({title, description}) => {
    return(
        <Container>
            <div id="title-container"><h3>{title}</h3></div>
            <div id="dropzone-container">
                <div id="cards" draggable="true">Eu sou um card</div>
            </div>
            <div>{description}</div>
        </Container>
    )
}