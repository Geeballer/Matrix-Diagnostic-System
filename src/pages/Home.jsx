import { HomeContent, TextContainer, HomeTitle, ProductLine, StyledHome } from "../styled/StyledHome.styled"
import NavBar from '../components/NavBar'
import line from '../assets/productLine.png'
import CTAButtons from '../components/CTAButtons'
import Contact from "../components/Contact"
import Policy from "../components/Policy"
import logoImage from '../assets/logoWhite.png'

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Preloader } from "../components/Preloader"


const Home = () => {

  const [modal, setModal] = useState(false)
  const [policyPopup, setPolicyPopup] = useState(false)
  const [preloader, setPreloader] = useState(false)

  useEffect( () => {
    setPreloader(true)
      setTimeout(() => {
        setPreloader(false)
      },3000)
  }, [])

  useEffect( () => {
    setTimeout(() => {
      setPolicyPopup(true)
  },5000)
  }, [])

  return (
    <>
      {preloader ? 
      <Preloader />
       :
      <StyledHome>
        <NavBar 
          setModal = {setModal}
          color = '#fff'
          borderColor = '#fff'
          logo={logoImage}
          backgroundColor = 'transparent'
          iconColorOne = '#fff'
          iconColorTwo = '#fff'
        />
        <HomeContent>
          <TextContainer>
            <HomeTitle>
              PRELIMINARY <br /> DIAGNOSTICS OF EYE DEFECTS
            </HomeTitle>
            <ProductLine src={line} alt='Product Line' />
            <Link to='/about'> about </Link>
          </TextContainer>
          <CTAButtons 
            setModal = {setModal}
          />
        </HomeContent>
        {modal && <Contact closeForm={setModal}/>}
        {policyPopup && <Policy acceptPolicy={setPolicyPopup}/>} 
      </StyledHome>
      }
    </>
  )
}

export default Home