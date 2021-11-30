import styled from 'styled-components';

import { backgroundColor } from '../../style/colors';

export const Container = styled.div`
    background: ${backgroundColor};
    border: 1px solid #fb951f11;
    border-radius: 4px;
    min-width: 300px;

    #title-container{
        h3{
            font-weight: 700;
            padding: 16px;
            color: #fd951fcc;
        }
    }


`