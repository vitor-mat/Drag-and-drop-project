import React, { useState } from 'react';

import { Board } from '../../components/board/index'
import { Card } from '../../components/card/index';


import {
    DragDropContext,
    Droppable,
    Draggable
} from 'react-beautiful-dnd';

import {
    Container
} from './style';

const dataKanban = JSON.parse(localStorage.getItem("dataKanban3354676199304804")) || [
    {
        id: "0",
        title: "Todo",
        items: []
    },
    {
        id: "1",
        title: "In-Progress",
        items: []
    },
    {
        id: "2",
        title: "Completed",
        items: []
    }
]

export const KanbanPage = () => {

    let [cardListData, setCardListData] = useState(dataKanban)
    let [inputAddValue, setInputAddValue] = useState("")

    async function handleOnDragEnd(result) {

        if (!result.destination) return;

        const { source, destination } = result;

        const itemsCopy = Array.from(cardListData);
        let add

        if (source.droppableId === destination.droppableId && source.index === destination.index) return;

        if (source.droppableId === destination.droppableId && source.index !== destination.index) {
            add = itemsCopy[source.droppableId].items.splice(source.index, 1)
            await itemsCopy[source.droppableId].items.splice(destination.index, 0, add[0])
        }

        if (source.droppableId !== destination.droppableId) {
            add = itemsCopy[source.droppableId].items.splice(source.index, 1)
            await itemsCopy[destination.droppableId].items.splice(destination.index, 0, add[0])
        }
        await setCardListData(itemsCopy)
        localStorage.setItem("dataKanban3354676199304804", JSON.stringify(cardListData))
    }

    const addNewItem = async (e) => {

        if (!inputAddValue) {
            alert("Error: Campo de entrada vazio!")
            return;
        }

        let newArray = cardListData

        newArray[0].items.push({
            name: inputAddValue,
            status: "eventual",
            id: ((Math.random() * 1000000).toFixed(2)).toString()
        })
        await setCardListData(cardListData = newArray)
        setInputAddValue(inputAddValue = "")

        localStorage.setItem("dataKanban3354676199304804", JSON.stringify(cardListData))
    }

    const inputAddHandle = (e) => {
        setInputAddValue(inputAddValue = e.target.value)
    }

    const deleteItemFunction = async (id, column) => {


        let newArray = cardListData

        const newArrayItems = cardListData[column].items.filter((value, index) => {
            if (value.id === id) {
                return false;
            }

            return true;
        })

        newArray[column].items = newArrayItems

        await setCardListData(cardListData = newArray)
        localStorage.setItem("dataKanban3354676199304804", JSON.stringify(cardListData))

        //forcar atualizacao do itens pro excluido sumir
        const myInputValue = inputAddValue
        setInputAddValue(inputAddValue = " ")
        setInputAddValue(inputAddValue = myInputValue)
    }

    return (
        <Container>
            <header>
                <h1>Kanban Board</h1>
                <div id="add-div">
                    <input
                        type="text"
                        onChange={e => inputAddHandle(e)}
                        value={inputAddValue}
                        onKeyPress={e => {
                            if (e.key === "Enter") {
                                addNewItem()
                            }
                        }}
                        placeholder="Digite Aqui"
                    />
                    <button onClick={addNewItem}>Adicionar</button>
                </div>
            </header>
            <main>
                {
                    <DragDropContext onDragEnd={handleOnDragEnd} id="drag-context">
                        {
                            cardListData.map((data, index) => {
                                return (
                                    <Board
                                        title={data.title}
                                        key={index}
                                    >
                                        <Droppable
                                            droppableId={data.id}
                                        >
                                            {(provided, snapshot) => {
                                                return (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.droppableProps}
                                                        className="dropzone-container"
                                                        style={{
                                                            background: snapshot.isDraggingOver ? 'rgba(10, 255, 180, .1)' : ""
                                                        }}
                                                    >
                                                        {
                                                            data.items.map((value, index) => {
                                                                return (
                                                                    <Draggable key={`key${value.id}`} draggableId={value.id} index={index} >
                                                                        {
                                                                            (provided) => {
                                                                                return (
                                                                                    <span
                                                                                        ref={provided.innerRef}
                                                                                        {...provided.draggableProps}
                                                                                        {...provided.dragHandleProps}
                                                                                    >
                                                                                        <Card
                                                                                            title={value.name}
                                                                                            status={value.status}
                                                                                            deleteItemFunction={deleteItemFunction}
                                                                                            id={value.id}
                                                                                            column={data.id}
                                                                                        />
                                                                                    </span>
                                                                                )
                                                                            }
                                                                        }
                                                                    </Draggable>
                                                                )
                                                            })
                                                        }
                                                        {provided.placeholder}
                                                    </div>
                                                )
                                            }}
                                        </Droppable>
                                    </Board>
                                )
                            })
                        }
                    </DragDropContext>
                }
            </main>
            <footer>
                <span>Make by Vitor M.</span>
            </footer>
        </Container>
    )
}