import styled from 'styled-components';

export const Container = styled.div`

    box-shadow: 0 2px 2px -1px #fd951fcc;
    widht: 250px;
    margin: 25px 0;
    font-weight: 600;
    font-size: 18px;
    padding: 16px;

    #status{
        width: 30px;
        height: 8px;
        margin-bottom: 16px;
        ${(prop) => {
            if(prop.status === "urgent"){
                return "background: red;"
            }else if(prop.status === "alert"){
                return "background: yellow;"
            }else{
                return "background: green;"
            }
        }}
    }

    border-radius: 4px;
    
`