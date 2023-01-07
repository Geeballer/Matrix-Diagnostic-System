import styled from 'styled-components'

import { DeviceSize } from './StyledVariable.styled'

export const StyledResult = styled.div`
    width: 35%;
    height: 86vh;
    margin: auto;
    background: #fff;
    color: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2rem;
    padding: 3rem 0;
    z-index: 1;

        @media ${DeviceSize.tablet}{
            width: 70vw;
        }
`