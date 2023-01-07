import styled from "styled-components"

import { DeviceSize } from "./StyledVariable.styled"

export const StyledNavBar = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 15rem;
    position: sticky;
    top: 0;
    z-index: 20;

        & > a{
            
            @media ${DeviceSize.mobile}{
                position: absolute;
                left: 3%;
                top: 20%;
            }

            @media ${DeviceSize.tablet}{
                position: absolute;
                left: 3%;
                top: 30%;

            }
            
        }
`