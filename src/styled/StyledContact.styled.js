import styled from "styled-components"

import { DeviceSize } from "./StyledVariable.styled"

export const Form = styled.form`
    width: 32vw;
    height: 86vh;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2rem;
    padding: 3rem 0;
    z-index: 1;

        @media ${DeviceSize.mobile}{
            width: 90vw;
        }

        @media ${DeviceSize.tablet}{
            width: 70vw;
            padding: 8rem 0;
        }
`

export const FormText = styled.div`
    width: auto;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: bahnschrift, oswald;
`

export const FormLogo = styled.img`
    width: 6rem;
    height: 2rem;
    margin-bottom: 1rem;
    
        @media ${DeviceSize.tablet}{
            width: 12rem;
            height: 3rem;
            margin-bottom: 3rem;
        }
`

export const FormHeader = styled.h2`
    font-size: 2rem;
    margin-bottom: 1rem;

        @media ${DeviceSize.tablet}{
            font-size: 3rem;
            margin-bottom: 2rem;
        }
`

export const FormParagraph = styled.p`
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 2rem;

        @media ${DeviceSize.tablet}{
            font-size: 2rem;
            margin-bottom: 5rem;
        }
`

export const FormInputContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FormInput = styled.input`
    width: 80%;
    padding: 1rem 1.3rem;
    border: #ececec;
    outline: none;
    background: #ececec;
    font-size: 1.4rem;
    font-family: bahnschrift, oswald;
    color: #838383;
    border-radius: 1rem;
    margin-bottom: 1.5rem;

        @media ${DeviceSize.tablet}{
            font-size: 1.8rem;
            margin-bottom: 2rem;
        }

        &:invalid{
            border: #fc8181;
        }

        &:valid{
            border: greenyellow;
        }
`

export const FormTextArea = styled.textarea`
    width: 80%;
    height: 18vh;
    padding: 1rem 1.3rem;
    border: #ececec;
    outline: none;
    background: #ececec;
    font-size: 1.4rem;
    font-family: bahnschrift, oswald;
    color: #838383;
    border-radius: 1rem;
    resize: none;
    margin-bottom: 1.5rem;

        @media ${DeviceSize.tablet}{
            font-size: 1.8rem;
            margin-bottom: 3rem;
        }
`

export const FormButton = styled.button`
    width: 80%;
    padding: 1rem 1.3rem;
    border: none;
    outline: none;
    font-size: 1.4rem;
    font-family: bahnschrift, oswald;
    color: #fff;
    border-radius: 1rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(120deg, #00B7D1 0%, #0079D4 50%, #000 50%);
    text-align: center;
    text-decoration: none;
    background-size: 220%;
    transition: all .3s;
    cursor: pointer;

        @media ${DeviceSize.tablet}{
            font-size: 1.8rem;
            margin-bottom: 2rem;
        }

    &:hover,
    &:active,
    &:visited{
        background-position: 100%;
    }
` 

export const ContactContainerBottom = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: bahnschrift, oswald;

        @media ${DeviceSize.tablet}{
            font-size: 2rem;
        }
`

export const ContactPhone = styled.a`
    text-decoration: none;
    border: 1px solid #000;
    padding: 0.5rem 2rem;
    border-radius: 2rem;
    margin-bottom: 1.5rem;
    color: #000;

    &:hover,
    &:active,
    &:visited{
        color: #fff;
        background: #0079D4;
        border: 1px solid #0079D4;
    }
`

export const ContactEmail = styled.a`
    text-decoration: none;
    color: #000;

    &:hover,
    &:active,
    &:visited{
        color: #0079D4;
    }
`