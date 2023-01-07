import styled from 'styled-components'

const size = {
    mobile: `(min-width: 320px) and (max-width: 425px)`,
    tablet: `(min-width: 768px) and (max-width: 980px)`,
    desktop: `(min-width: 1024px) and (max-width: 1200px)`
}

export const DeviceSize = {
    desktop: `${size.desktop}`,
    tablet: `${size.tablet}`,
    mobile: `${size.mobile}`,
    
}

export const TransparentBackground = styled.div`
    background: radial-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;
    transition: all .3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
        &::-webkit-scrollbar{
            display: none;
        }
`

export const DeepBackground = styled.div`
    width: 100%;
    height: 100vh;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;
    transition: all .3s ease-in-out;
    overflow: hidden;
        &::-webkit-scrollbar{
            display: none;
        }
`

export const CloseButton = styled.button`
    width: 5rem;
    height: 5rem;
    background: #bdbfc194;
    border-radius: 50%;
    position: absolute;
    top: 2%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 2rem;
    
    &:hover,
    &:active,
    &:visited{
        cursor: pointer;
        background: #c8cacc;
    }
`