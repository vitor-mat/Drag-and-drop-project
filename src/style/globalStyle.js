import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: white;
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        overflow-x: hidden;
    }
    
    body::-webkit-scrollbar {
        width: 14px;
      }
      
    body::-webkit-scrollbar-track {
        background: rgba(20, 19, 22, .4);
    }
      
    body::-webkit-scrollbar-thumb {
        background: rgba(20, 19, 22, .7);
        border-radius: 20px;
    }
`