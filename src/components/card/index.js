import React, { useState } from 'react';

import {
    Container
    } from './style'

export const Card = ({title, status, dragStart, highlight}) => {



    const drag = () => {}

    const dragEnd = () => {}


    /*Funções do dragzone*/
    const dragEnter = () => {}

    const dragOver = () => {}

    const dragLeave = () => {}

    const drop = () => {}


    return(
        <Container status={status} highlight={highlight}>
            <div id="title-container"><h3>{title}</h3></div>
            <div id="dropzone-container"
                onDragEnter = {dragEnter}
                onDragOver = {dragOver}
                onDragLeave = {dragLeave}
                onDrop =  {drop}
            >
                <div id="cards" draggable="true"
                    onDragStart={() => dragStart()}
                    onDrag={() => drag}
                    onDragEnd={() => dragEnd}
                >
                    <div id="status"></div>
                    Eu sou um card
                </div>
            </div>
        </Container>
    )
}