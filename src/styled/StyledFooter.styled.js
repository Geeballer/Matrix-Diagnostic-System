import styled from "styled-components"

import { DeviceSize } from "./StyledVariable.styled"

export const StyledFooter = styled.footer`
    width: 100%;
    height: auto;
`

export const StyledAddress = styled.div`
    width: 100%;
    height: auto;
    padding: 5rem 15rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        
        @media ${DeviceSize.mobile}{
            padding: 1rem 1rem;
            flex-direction: column;
        }

        @media ${DeviceSize.tablet}{
            padding: 3rem;
        }
`

export const Address = styled.div`
    width: 30%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

        @media ${DeviceSize.mobile}{
            width: 100%;
            margin-bottom: 2rem;
        }
`

export const AddressHeader = styled.h2`
    font-size: 2rem;
    margin-bottom: 1rem;
`

export const AddressParagraph = styled.p`
    font-size: 1.8rem;
    
        @media ${DeviceSize.mobile}{
            font-size: 1.5rem;
        }
`

export const Logo = styled.img`
    width: 5rem;
    height: 2rem;
    margin-bottom: 1rem;
`

export const Slogan = styled.h1`
    font-size: 2rem;
    color: #777;
    font-family: oswald;
    margin-bottom: 1rem;
`

export const SocialLinks = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const SocialLink = styled.a`
    width: auto;
    height: auto;
    text-decoration: none;
    color: #000;
    font-size: 2.5rem;
`

export const Facebook = styled.i`
    border: 2px solid #000;
    padding: 5px 1rem;
    border-radius: 50%;
    text-align: center;

    &:hover,
    &:active{
        color: #fff;
        background: #4064ae;
        border: 2px solid #4064ae;
    }
`

export const Twitter = styled.i`
    border: 2px solid #000;
    padding: 5px 1rem;
    border-radius: 50%;
    text-align: center;

    &:hover,
    &:active{
        color: #fff;
        background: #1b9deb;
        border: 2px solid #1b9deb;
    }
`

export const LinkedIn = styled.i`
    border: 2px solid #000;
    padding: 5px 1rem;
    border-radius: 50%;
    text-align: center;
    
    &:hover,
    &:active{
        color: #fff;
        background: #0270ad;
        border: 2px solid #0270ad;
    }
`

export const Github = styled.i`
    border: 2px solid #000;
    padding: 5px 1rem;
    border-radius: 50%;
    text-align: center;

    &:hover,
    &:active{
        color: #fff;
        background: #000;
        border: 2px solid #000;
    }
`

export const FooterLine = styled.img`
    width: 100%;
    height: 3vh;
`