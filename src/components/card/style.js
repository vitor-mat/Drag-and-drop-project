import styled from 'styled-components';

import { highlightColor } from '../../style/colors';

export const Container = styled.div`
    width: 100%;
    min-height: 70px;
    text-align: justify;
    border-bottom: 2px solid ${highlightColor};
    margin-bottom: 35px;
    padding: 10px 0 20px;
    word-break: break-word;

    .close-icon-div{
        width: 100%;

        margin-bottom: 20px;

        display: flex;
        justify-content: space-between;

        .status{
            width: 25px;
            height: 8px;
            ${(props) => {
                if(props.status === "Todo"){
                    return "background: #F08080;"
                }else if(props.status === "In-Progress"){
                    return "background: lightblue;"
                }else{
                    return "background: lightgreen;"
                }
            }}
        }

        #close-icon-img{
            width: 20px;
            height: 20px;
            cursor: pointer;
        }
    }
`