import styled from "styled-components"

import { DeviceSize } from "./StyledVariable.styled"

export const StyledAbout = styled.div`
    width: 100%;
    height: auto;
` 

export const Banner = styled.section`
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('https://ziekereye.com/wp-content/uploads/2019/11/Optician_Optometrist_Ophthalmologist-scaled.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    background-attachment: fixed;

        @media ${DeviceSize.mobile} {
            height: 100vh;
        }
`

export const BannerTextContainer = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80vh;
    padding: 0 15rem;

        @media ${DeviceSize.mobile} {
            padding: 0 1rem;
            height: 100vh;
        }
        
        @media ${DeviceSize.tablet} {
            padding: 0 3rem;
            height: 100vh;
        }
`

export const BannerText = styled.h1`
    font-size: 4rem;
    color: #fff;
    margin-bottom: 2rem;
    font-family: oswald;
    text-transform: uppercase;

        @media ${DeviceSize.mobile} {
            font-size: 2.5rem;
        }

        @media ${DeviceSize.tablet} {
            font-size: 4rem;
        }
`

export const ProductLine = styled.img`
    width: 25rem;
    height: 1rem;

        @media ${DeviceSize.mobile} {
            width: 20rem;
        }
`

export const AboutSection = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    padding: 0 15rem;

        @media ${DeviceSize.mobile} {
            padding: 1rem 1rem;
            flex-direction: column;
            margin-bottom: 5rem;
            height: auto;
        }

        @media ${DeviceSize.tablet} {
            padding: 1rem 3rem;
            flex-direction: column;
            margin-bottom: 5rem;
            height: auto;
        }
    
`

export const AboutSectionText = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
`

export const AboutTextDescription = styled.p`
    font-size: 2rem;
    margin-bottom: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

        @media ${DeviceSize.mobile} {
            font-size: 2rem;
        }
`

export const AboutTextHeader = styled.h1`
    font-size: 4rem;
    font-family: oswald;
    margin-bottom: 1rem;
    text-transform: uppercase;

        @media ${DeviceSize.mobile} {
            font-size: 3rem;
            margin-bottom: 3rem;
        }
`

export const AboutTextParagraph = styled.p`
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
        @media ${DeviceSize.mobile} {
            font-size: 1.5rem;
            padding-right: 1rem;
        }
        
        @media ${DeviceSize.tablet} {
            font-size: 2rem;
            padding-right: 4rem;
        }
`

export const AboutImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    
        @media ${DeviceSize.mobile} {
            width: 100%;
            margin-bottom: 3rem;
        }
`

export const AboutImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    -o-object-fit: contain;
    -o-object-position: center;
`

export const BannerAttached = styled.section`
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('https://cdn-prod.medicalnewstoday.com/content/images/articles/326/326753/a-patient-in-an-ophthalmology-department-being-assessed-by-a-ophthalmologist.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    padding: 0 15rem;
    display: flex;
    justify-content: center;
    align-items: center;

        @media ${DeviceSize.mobile} {
            padding: 0 1rem;
            height: 100vh;
        }

        @media ${DeviceSize.tablet} {
            padding: 0 3rem;
        }
`

export const BannerAttachedTextContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
`

export const BannerAttachedHeader = styled.h1`
    font-size: 4rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
    font-family: oswald;

        @media ${DeviceSize.mobile} {
            font-size: 2.5rem;
        }

        @media ${DeviceSize.tablet} {
            font-size: 4rem;
        }
`

export const BannerAttachedParagraph = styled.p`
    font-size: 1.5rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-bottom: 2rem;
    width: 60%;

        @media ${DeviceSize.mobile} {
            font-size: 1.5rem;
            width: 90%;
        }

        @media ${DeviceSize.tablet} {
            font-size: 2rem;
            width: 70%;
        }
`

export const BottomSection = styled.section`
    width: 100%;
    height: auto;
    padding: 5rem 15rem;

        @media ${DeviceSize.mobile} {
            padding: 2rem 1rem;
            margin-bottom: 5rem;
        }

        @media ${DeviceSize.tablet} {
            padding: 2rem 3rem;
            margin-bottom: 5rem;
        }
`

export const BottomSectionHeader = styled.h1`
    font-size: 4rem;
    text-align: center;
    margin-bottom: 4rem;
    font-family: oswald;
    text-transform: uppercase;

        @media ${DeviceSize.mobile} {
            font-size: 2rem;
            margin-bottom: 2rem;
        }
`

export const BottomSectionParagraph = styled.p`
    font-size: 1.5rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        
        @media ${DeviceSize.mobile} {
            font-size: 1.5rem;
        }

        @media ${DeviceSize.tablet} {
            font-size: 2rem;
        }
`