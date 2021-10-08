import React from 'react';

import { Card } from '../../components/card/index'

import {
    Container
    } from './style';

export const KanbanPage = () => {
    return(
        <Container>
            <Card title="Todo" description="Next Level Week" status="urgent"/>
            <Card title="In Progress" description="Next Level Week" status="alert"/>
            <Card title="Done" description="Next Level Week"/>
        </Container>
    )
}