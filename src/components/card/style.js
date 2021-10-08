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

        #cards{
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
                    if(prop.status == "urgent"){
                        return "background: red;"
                    }else if(prop.status == "alert"){
                        return "background: yellow;"
                    }else{
                        return "background: green;"
                    }
                }}
            }

            border-radius: 4px;
        }
    }

`