import styled from 'styled-components'

import { backgroundColor, highlightColor } from '../../style/colors'

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: ${backgroundColor};

    display: flex;
    flex-direction: column;

    header{
        width: 100%;
        height:200px;
        display: grid;
        grid-template-areas: "title input";
        grid-template-rows: auto;
        grid-template-columns: 40% 60%;
        align-items: center;
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
            width: 100%;
            height: 100px;
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
                cursor: pointer;
                transition: 2s linear;
            }

            button:active{
                opacity: .5;
            }
        }

        @media(max-width: 900px){
            height: 250px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 20px 0;

            h1{
                width: 100%;
                height: 130px;
                text-align: center;
            }

            #add-div{
                width: 100%;
                padding: 0 30px;
            }
        }

        @media(max-width: 540px){
            h1{
                font-size: 48px;
                height: 90px;
            }

        }

        @media(max-width: 360px){

            height: 190px;

            h1{
                font-size: 40px;
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
        background: rgb(50, 50, 50);

        #dragdrop-container-div{
            grid-area: all;
            display: flex;
            gap: 20px;
            padding: 20px;
            overflow-x: auto;
            span{
                widht: 100%;
                padding: 0 10px;
            }
        }

        #dragdrop-container-div::-webkit-scrollbar {
            width: 2px;
          }
          
        #dragdrop-container-div::-webkit-scrollbar-track {
            background: rgba(20, 19, 22, .4);
        }
          
        #dragdrop-container-div::-webkit-scrollbar-thumb {
            background: rgba(20, 19, 22, .7);
            border-radius: 20px;
        }

        .board{
            background: ${backgroundColor};
            width: 350px;
            min-width: 350px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px 20px;
            gap: 50px;

            .title-board-div{
                width: 100%;
                text-align: center;
                
                h3{
                    color: ${highlightColor};
                }
            }

            .dropzone-container{
                width: 100%;
                min-height: 250px;
                overflow: hidden;
            }
        }
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