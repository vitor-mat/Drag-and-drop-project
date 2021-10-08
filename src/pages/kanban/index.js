import React, { useState } from 'react';

import { Card } from '../../components/card/index'

import {
    Container
} from './style';

export const KanbanPage = () => {

    let [highlight, setHighlight] = useState(false);

    /*Funções dos cards */
    const dragStart = () => {
        setHighlight(highlight = true)
    }

    const dragEnd = () => {
        setHighlight(highlight = false)
    }

    return (
        <Container highlight={highlight}>
            <Card
                title="Todo"
                description="Next Level Week"
                status="urgent"
                highlight={highlight}
                dragStart={dragStart}
                dragEnd={dragEnd}
            />
            <Card
                title="In Progress"
                description="Next Level Week"
                status="alert"
                highlight={highlight}
                dragStart={dragStart}
                dragEnd={dragEnd}
            />
            <Card
                title="Done"
                description="Next Level Week"
                highlight={highlight}
                dragStart={dragStart}
                dragEnd={dragEnd}
            />
        </Container>
    )
}