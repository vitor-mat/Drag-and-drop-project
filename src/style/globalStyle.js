import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
        color: white;
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
    }

    body{
        background: black;
    }
`