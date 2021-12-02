import React from 'react';

import {
    Container
} from './style';

import closeIconX from "../../assets/images/close_icon_x.svg"

export const Card = ({ name, deleteItemFunction, id, column, status }) => {
    return(
        <Container status={status}>
            <div className="close-icon-div">
                <div className="status"></div>
                <img
                    src={closeIconX}
                    alt="close icon"
                    id="close-icon-img"
                    onClick={() => deleteItemFunction(id, column)}
                />
            </div>
            {name}
        </Container>
    )
}