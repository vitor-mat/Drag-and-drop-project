import styled from 'styled-components';

export const Container = styled.div`

    box-shadow: 0 2px 2px -1px #fd951fcc;
    backgorund: blue;
    widht: 100px;
    margin: 25px 0;
    font-weight: 600;
    font-size: 18px;
    padding: 16px;

    #status-div{

        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;

        #status{
            width: 30px;
            height: 8px;
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

        img{
            width: 20px;
            height: 20px;
            cursor: pointer;
        }
    }

    border-radius: 4px;
    
`