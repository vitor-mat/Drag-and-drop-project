import styled from 'styled-components';

import { highlightColor, backgroundColor } from '../../style/colors'

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(50, 50, 50);
    overflow-x: hidden;

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

            input::placeholder{
                font-weight: 300;
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

        @media(max-width: 1000px){
            height: 220px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 10px;

            h1{
                text-align: center;
            }

            #add-div{
                padding: 0 50px;
            }
        }

        @media(max-width: 530px){
            h1{
                font-size: 48px;
            }

            #add-div{
                padding: 0 20px;
            }
        }

    }

    main{
        width: 100%;
        flex: 1;


        display: grid;
        grid-template-areas: "nada all caquinha";
        grid-template-column: 5px / 1fr / 5px;
        grid-template-row: 1fr;
        justify-content: center;
        margin-bottom: 5px;

        #test{
            grid-area: all;
            display: flex;
            gap: 20px;
            padding: 20px;
            overflow: auto;


            span{
                widht: 100%;
                padding: 0 10px;
            }
        }

        #test::-webkit-scrollbar {
            width: 2px;
          }
          
          #test::-webkit-scrollbar-track {
            background: rgba(20, 19, 22, .4);
          }
          
          #test::-webkit-scrollbar-thumb {
            background: rgba(20, 19, 22, .7);
            border-radius: 20px;
          }
    }

    footer{
        height: 70px;
        width: 100%;
        background: ${backgroundColor};
        display: flex;
        align-items: center;
        justify-content: center;

        span{
            color: ${highlightColor};
            font-size: 18px;
        }
    }

`