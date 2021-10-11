import styled from 'styled-components';

export const Container = styled.div`
    background: #141316;
    border: 1px solid #fb951f11;
    border-radius: 4px;

    #title-container{
        h3{
            font-weight: 700;
            padding: 16px;
            color: #fd951fcc;
        }
    }

    #dropzone-container{
        padding: 16px;
        min-width: 332px;
        min-height: 200px;

        ${props => props.highlight ? "background: #fd951f08;" : "background: #141316;" }
        ${props => props.over ? "background: #4cd13711;" : "" }
        
        ${props => props.isDraging ? "opacity: 0.3;" : "opacity: 1;" }

        transition: 400ms;
    }

`