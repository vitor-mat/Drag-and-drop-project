import React from 'react';

import { Container } from './style';

import closeIconX from '../../assests/close_icon_x.svg'

export const Card = ({ title, deleteItemFunction, id, column }) => {
    return (
        <Container>
            <div id="status-div">
                <div id="status"></div>
                <img src={closeIconX} alt="close icon" onClick={() => deleteItemFunction(id, column)}/>
            </div>
            {title}
        </Container>
    )
}