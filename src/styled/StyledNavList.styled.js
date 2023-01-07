import styled from "styled-components"

import { DeviceSize } from "./StyledVariable.styled"

export const MenuIcon = styled.div`
    width: auto;
    height: auto;
    cursor: pointer;
    display: none;

        & i{
            font-size: 3.5rem;
            font-weight: 600;
        }

        @media ${DeviceSize.mobile}{
            display: flex;
            position: absolute;
            right: 3%;
            top: 15%;
            z-index: 40;
        }

        @media ${DeviceSize.tablet}{
            display: block;
            position: absolute;
            right: 3%;
            top: 20%;
            z-index: 40;
        }    
`

export const NavListContainer = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    justify-content: center;

        @media ${DeviceSize.mobile}{
            position: absolute;
            top: 0;
            left: 0;
        }

        @media ${DeviceSize.tablet}{
            position: absolute;
            top: 0;
            left: 0;
        }
`

export const StyledNav = styled.ul`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
        
        @media ${DeviceSize.mobile}{
            flex-direction: column;
            height: 100vh;
            width: 100vw;
            padding: 15rem 0;
            align-items: center;
            position: absolute;
            background: #000;
            z-index: 30;
        }

        @media ${DeviceSize.tablet}{
            flex-direction: column;
            height: 100vh;
            width: 100vw;
            padding: 70% 0;
            align-items: center;
            position: absolute;
            background: #000;
            z-index: 30;
        }
`

export const StyledNavList = styled.li`
    list-style: none;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    & > a{
        text-decoration: none;
        font-size: 1.7rem;
        
        &:hover{
            color: none;
        }

        @media ${DeviceSize.mobile}{
            color: #fff !important;
        }

        @media ${DeviceSize.tablet}{
            color: #fff !important;
        }
    }
`

export const StyledBorderLink = styled.a`
    text-decoration: none;
    font-size: 1.5rem;
    border: 2px solid;
    border-radius: 3rem;
    padding: 8px 2rem;

    &:hover{
        background: #0079D4;
        border: 2px solid #0079D4 !important;
        color: #fff !important;
    }

    @media ${DeviceSize.mobile}{
        border: 2px solid #fff !important;
    }

    @media ${DeviceSize.tablet}{
        border: 2px solid #fff !important;
    }
`

