import styled from "styled-components"

import { DeviceSize } from "./StyledVariable.styled"

export const StyledTest = styled.div`
    width: 100%;
    height: auto;
    position: relative;
`

export const DiagnosisHeader = styled.h2`
    font-size: 3rem;
    font-family: bahnschrift, oswald;
    text-transform: uppercase;
    margin-bottom: 5rem;
        
        @media ${DeviceSize.mobile}{
            font-size: 2.5rem;
        }

        @media ${DeviceSize.tablet}{
            font-size: 3.5rem;
        }
`

export const DaignosisForm = styled.section`
    width: 100%;
    height: auto;
    margin: 5rem auto 0 auto;
    padding: 0 15rem;

        @media ${DeviceSize.tablet}{
            padding: 0 3rem;
        }

        & form{
            width: 100%;
            height: auto;
            padding: 1rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-bottom: 2rem;
        
                @media ${DeviceSize.mobile}{
                    flex-direction: column;
                }
        }
    
        @media ${DeviceSize.mobile}{
            padding: 0 1rem;
        }
`

export const DiagnosisBox = styled.div`
    width: calc(100% / 2 - 5rem);
    height: auto;
    margin-bottom: 2rem;

        @media ${DeviceSize.mobile}{
            width: 100%;
        }

        @media ${DeviceSize.tablet}{
            width: calc(100% / 2 - 3rem);
            margin-bottom: 3rem;
        }
`

export const DiagnosisInput = styled.input`
    font-size: 1.5rem;
    outline: none;
    border: none;
    background: transparent;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 1rem 5px;
    width: 100%;
    border-bottom: 2px solid #000;
    margin-bottom: 1rem;

        @media ${DeviceSize.tablet}{
            font-size: 2rem;
        }
`

export const DiagnosisLabel = styled.label`
    font-size: 1.5rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: block;

        @media ${DeviceSize.tablet}{
            font-size: 2rem;
        }

        &:not(:last-of-type){
            margin-bottom: 2rem;
        }
        
        & input{
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;

                &:checked ~ span::after{
                    display: block;
                }

                &:checked ~ span{
                    background-color: #00B4CD;
                }
        }

        & span{
            position: absolute;
            top: 0;
            right: 0;
            height: 2.5rem;
            width: 2.5rem;
            background-color: #eee;
            border-radius: 50%;

                &::after{
                    content: '';
                    position: absolute;
                    display: none;
                    top: 9px;
                    left: 9px;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #fff;
                }
        }

        &:hover input ~ span{
            background-color: #ccc;
        }

        &:hover input:checked ~ span{
            background-color: #00B4CD;
        }
`

export const DiagnosisSelect = styled.select`
    font-size: 1.5rem;
    outline: none;
    border: none;
    background: transparent;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 1rem 5px;
    width: 100%;
    border-bottom: 2px solid #000;
    margin-bottom: 1rem;

        @media ${DeviceSize.tablet}{
            font-size: 2rem;
        }
`

export const DiagnosisOption = styled.option`
    background: #eee;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const Description = styled.h2`
    font-size: 1.8rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
        @media ${DeviceSize.tablet}{
            font-size: 2rem;
        }
`

export const DiagnosisButton = styled.button`
    width: 30%;
    height: 5rem;
    outline: none;
    border: none;
    display: block;
    padding: 1rem;
    font-size: 1.8rem;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    cursor: pointer;
    margin: 3rem auto;
    border-radius: 2rem;
    background: linear-gradient(120deg, #fff 0%, #fff 50%, #000 50%);
    background-size: 220%;
    box-shadow: 0 2px 5px 5px rgba(0, 0, 0, .2);
    transition: all .3s;

        @media ${DeviceSize.mobile}{
            width: 70%;
        }

    &:hover,
    &:active,
    &:visited{
        background-position: 100%;
        color: #fff;
    }
`


export const ScannerInput = styled.input`
    width: 100%;
    height: 100%;
`

export const Notice = styled.span`
    font-size: 1.5rem;
    color: red;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: italic;
`

export const UploadImage = styled.input`
    width : 100vw;
    font-size: 1.5rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    margin: 3rem;
    background: #fff;
    box-shadow: 0 2px 5px 5px rgba(0, 0, 0, .2);
    outline: none;
    border-radius: 1.5rem;

    ::-webkit-file-upload-button{
        color: #000;
        background-color: #fff;
        font-size: 1.5rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 600;
        box-shadow: 0 2px 5px 5px rgba(0, 0, 0, .2);
        padding: 1rem 2rem;
        outline: none;
        border: none;
        border-radius: 1.5rem;
        cursor: pointer;
        margin-right: 2rem;

        &:hover{
            background: #000;
            color: #fff;
            transition: all .3s ease-in;
        }
    }
`

export const ImageBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
`