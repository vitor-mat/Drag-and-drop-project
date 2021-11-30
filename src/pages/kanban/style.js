import styled from 'styled-components';

import { highlightColor, backgroundColor } from '../../style/colors'

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(50, 50, 50);

    header{
        width: 100%;
        height: 130px;
        display: grid;
        grid-template-areas: "title input";
        grid-template-row: 100%;
        grid-template-columns: 65% 35%;
        align-items: center;
        background: ${backgroundColor};
        padding-left: 70px;


        h1{
            width: 100%;
            grid-area: title;
            color: ${highlightColor};
            font-size: 72px;
            font-weight: 900;
        }

        #add-div{

            grid-area: input;
            height: 100%;
            width: 100%;
            display: flex;
            gap: 20px;
            align-items: center;
            padding: 0 10px;

            input{
                width: 100%;
                height: 32px;
                background: none;
                border: none;
                outline: none;
                border-bottom: 2px solid ${highlightColor};
                color: ${highlightColor};
                font-weight: 700;
                font-size: 18px;
            }

            button{
                background: ${highlightColor};
                color: ${backgroundColor};
                border: none;
                font-weight: 700;
                width: 120px;
                height: 32px;
                font-size: 16px;
                cursor: pointer;
                transition: .2s linear;
            }

            button:active{
                opacity: .5;
            }
        }
    }

    main{
        width: 100%;
        flex: 1;
        display: flex;
        justify-content: center;
        gap: 50px;
        padding-top: 20px;
        overflow: auto;
    }

    .dropzone-container{
        width: 100%;
        min-height: 200px;
        background: #141316;

        transition: .4s;

        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    span{
        widht: 100%;
        padding: 0 10px;
    }

`