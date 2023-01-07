import styled from 'styled-components'

import { DeviceSize } from './StyledVariable.styled'

export const StyledPolicy = styled.div`
    width: 32vw;
    height: 70vh;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2rem;
    padding: 2rem 3rem;
    overflow-y: auto;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

        @media ${DeviceSize.mobile}{
            width: 90vw;
        }

        @media ${DeviceSize.tablet}{
            width: 70vw;
        }
        

        & > a{
            background: #000;
            font-size: 1.5rem;
            text-decoration: none;
            color: #fff;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            padding: 1rem 2rem;
            border-radius: 3px;
            font-weight: 600;

            @media ${DeviceSize.tablet}{
                font-size: 2rem;
            }
        }
`

export const PolicyContainer = styled.div`
    width: 100%;
    height: 75%;
    overflow-y: auto;
    text-align: justify;
    padding-right: 5px;

        &::-webkit-scrollbar{
            width: 2px;
            background: #777;
            margin-left: 5px;
        }

        &::-webkit-scrollbar-thumb{
            background-color: #000;
        }
`

export const PolicyHeader = styled.h2`
    font-size: 2.5rem;
    font-family: bahnschrift, oswald;
    margin-bottom: 3rem;
    text-transform: uppercase;
`

export const PolicyText = styled.p`
    font-size: 1.5rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-bottom: 2rem;

        @media ${DeviceSize.tablet}{
            font-size: 2rem;
        }
`

export const AgreementText = styled.p`
    font-size: 1.5rem;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;

        @media ${DeviceSize.tablet}{
            font-size: 2rem;
        }
`
