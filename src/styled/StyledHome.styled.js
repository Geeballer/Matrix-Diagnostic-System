import styled from "styled-components"

import { DeviceSize } from "./StyledVariable.styled"

export const StyledHome = styled.section`
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('https://d31g6oeq0bzej7.cloudfront.net/Assets/image/jpeg/711b0d10-43ec-4f34-9733-36a58bfa7ad9.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;

        @media ${DeviceSize.mobile} {
            overflow: hidden;
        }

        @media ${DeviceSize.tablet} {
            overflow: hidden;
        }
`

export const HomeContent = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: oswald;
    padding: 0 15rem;
    
        @media ${DeviceSize.mobile} {
            padding: 0 1rem;
            height: 100vh;
            position: relative;
        }

        @media ${DeviceSize.tablet} {
            padding: 0 3rem;
        }
`

export const HomeTitle = styled.h1`
    font-size: 4rem;
    color: #fff;
    margin-bottom: 1rem;
    letter-spacing: 3px;
    line-height: 1.5;
    margin-bottom: 1rem;

        @media ${DeviceSize.mobile} {
            font-size: 2.5rem;
            letter-spacing: 2px;
            line-height: 1.3;
        }

        @media ${DeviceSize.tablet} {
            font-size: 4rem;
            letter-spacing: 2px;
            line-height: 1.3;
        }
`

export const TextContainer = styled.div`
    width: auto;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > a{
        font-size: 2rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 500;
        text-decoration: none;
        color: #fff;
        position: relative;
        width: 10%;

        @media ${DeviceSize.mobile} {
            font-size: 1.5rem;
            width: 12%;
        }

        @media ${DeviceSize.tablet} {
            font-size: 2.5rem;
            width: 12%;
        }
    
        &::before{
            position: absolute;
            content: '';
            left: 0;
            bottom: -30%;
            border: 2px solid #76B91B;
            width: 100%;
            height: 2px;

            @media ${DeviceSize.mobile} {
                height: 1.5px;
            }
        }
    }
`

export const ProductLine = styled.img`
    width: 25rem;
    height: 1rem;
    margin-bottom: 3rem;

        @media ${DeviceSize.mobile} {
            width: 15rem;
            height: 7px;
        }
`


