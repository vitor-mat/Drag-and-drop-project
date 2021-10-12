import React from 'react';

import { Container } from './style';

export const Card = ({ title, status }) => {
    return (
        <Container>
            <div id="status"></div>
            {title}
        </Container>
    )
}