import { NavListContainer, StyledBorderLink, StyledNav, StyledNavList } from "../styled/StyledNavList.styled"

import {Link} from 'react-router-dom'


const NavList = ({setModal, color, borderColor, closeMobileMenu, toggle}) => {

  return (
    <>
      <NavListContainer>
        <StyledNav className={toggle ? 'navMenu active' : 'navMenu'}>
          <StyledNavList>
            <Link to='/' onClick={closeMobileMenu} style={{color: `${color}`}}> Home </Link>
          </StyledNavList>
          <StyledNavList>
            <Link to='/about' onClick={closeMobileMenu} style={{color: `${color}`}}> About </Link>
          </StyledNavList>
          <StyledNavList>
            <Link to='/diagnose' onClick={closeMobileMenu} style={{color: `${color}`}}> Run Test </Link>
          </StyledNavList>
          <StyledNavList>
            <Link to='#' onClick={() => {setModal(true)}} style={{color: `${color}`}}> Contact Us </Link>
          </StyledNavList>
          <StyledNavList>
            <StyledBorderLink href='mailto:dadajibolaomotoyosi@gmail.com' onClick={closeMobileMenu} style={{color: `${color}`, borderColor: `${borderColor}`}}>hello@matrix.co</StyledBorderLink>
          </StyledNavList>
        </StyledNav>
      </NavListContainer>
    </>
  )
}

export default NavList