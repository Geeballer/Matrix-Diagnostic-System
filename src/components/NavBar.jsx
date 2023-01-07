import { StyledNavBar } from "../styled/StyledNavBar.styled"
import NavList from "./NavList";
import {MenuIcon} from '../styled/StyledNavList.styled'

import { Link } from "react-router-dom"
import { CgCloseO } from "react-icons/cg"
import {HiBars3CenterLeft} from 'react-icons/hi2'
import { useState } from "react"

const NavBar = ({logo, setModal, color, borderColor, backgroundColor, boxShadow, iconColorOne, iconColorTwo}) => {
  
  const [toggle, setToggle] = useState(false)
  const [showToggle, setShowToggle] = useState(true)

  const handleToggle = () => setToggle(!toggle)
  const closeMobileMenu = () => setToggle(false)
  
  const showToggleBtn = () => {
    if (window.innerWidth < 770){
      setShowToggle(false)
    } else{
      setShowToggle(true)
    }
  }

  window.addEventListener('resize', showToggleBtn)
  
  return (
    <StyledNavBar style={{backgroundColor: `${backgroundColor}`, boxShadow: `${boxShadow}`}}>
      <Link to="/"> <img src={logo} alt="Logo" style={{width: '8rem', height: '2.5rem'}} /> </Link>
      
      <NavList 
        setModal = {setModal}
        color = {color}
        borderColor = {borderColor}
        iconColorOne = {iconColorOne}
        iconColorTwo = {iconColorTwo}
        closeMobileMenu = {closeMobileMenu}
        toggle = {toggle}
      />

      <MenuIcon onClick={handleToggle}>  
        {showToggle && toggle ? <CgCloseO style={{color: `${iconColorOne}`, fontSize: '3.5rem'}} /> : <HiBars3CenterLeft style={{color: `${iconColorTwo}`, fontSize: '3.5rem'}}/>}
      </MenuIcon> 
    </StyledNavBar>
  )
}

export default NavBar
