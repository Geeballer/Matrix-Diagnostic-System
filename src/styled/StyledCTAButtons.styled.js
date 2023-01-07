import styled from "styled-components"

import { DeviceSize } from "./StyledVariable.styled"

export const BottomButtonContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 15%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

        @media ${DeviceSize.mobile} {
            left: 50%;
            bottom: 10%;
            transform: translateX(-50%);
            width: 70%;
        }

    & > a:nth-child(1){
        background: #00B4CD;
        text-decoration: none;
        color: #fff;
        text-align: center;
        text-transform: uppercase;
        font-size: 2.5rem;
        font-weight: 500;
        padding: 2rem 3rem;

            @media ${DeviceSize.mobile} {
                font-size: 1.7rem;
                padding: 1.5rem 2rem;
            }

            @media ${DeviceSize.tablet} {
                font-size: 3rem;
            }

        &:hover{
            background: #76B91B;
        }
    }

    & > a:nth-child(2){
        background: #0079D4;
        text-decoration: none;
        color: #fff;
        text-align: center;
        text-transform: uppercase;
        font-size: 2.5rem;
        font-weight: 500;
        padding: 2rem 3rem;

            @media ${DeviceSize.mobile} {
                font-size: 1.7rem;
                padding: 1.5rem 2rem;
            }

            @media ${DeviceSize.tablet} {
                font-size: 3rem;
            }

        &:hover{
            background: #76B91B;
        }
    }
`