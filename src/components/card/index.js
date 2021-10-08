import React, { useState } from 'react';

import {
    Container
    } from './style'

export const Card = ({title, status, dragStart, dragEnd, highlight}) => {

    let [isDraging, setIsDraging] = useState(false);

    const drag = () => {}


    /*Funções do dragzone*/
    const dragEnter = () => {}

    const dragOver = () => {}

    const dragLeave = () => {}

    const drop = () => {}


    return(
        <Container status={status} highlight={highlight} isDraging={isDraging}>
            <div id="title-container"><h3>{title}</h3></div>
            <div id="dropzone-container"
                onDragEnter = {dragEnter}
                onDragOver = {dragOver}
                onDragLeave = {dragLeave}
                onDrop =  {drop}
            >
                <div id="cards" draggable="true"
                    onDragStart={() => {
                        dragStart()
                        setIsDraging(isDraging = true)
                    }}
                    onDrag={() => drag}
                    onDragEnd={() => {
                        dragEnd()
                        setIsDraging(isDraging = false)

                    }}
                >
                    <div id="status"></div>
                    Eu sou um card
                </div>
            </div>
        </Container>
    )
}