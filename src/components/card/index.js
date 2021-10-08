import React from 'react';

import {
    Container
    } from './style'

export const Card = ({title, status}) => {
    return(
        <Container status={status}>
            <div id="title-container"><h3>{title}</h3></div>
            <div id="dropzone-container">
                <div id="cards" draggable="true">
                    <div id="status"></div>
                    Eu sou um card
                </div>
            </div>
        </Container>
    )
}