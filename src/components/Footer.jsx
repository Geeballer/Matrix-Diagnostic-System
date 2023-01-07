import line from '../assets/productLine.png'
import { Facebook, FooterLine } from '../styled/StyledFooter.styled'

import { StyledFooter, StyledAddress, Address, AddressHeader, AddressParagraph, Logo, Slogan, SocialLinks, SocialLink, Twitter, LinkedIn, Github } from '../styled/StyledFooter.styled'
import logo from '../assets/logoBlack.png'

import {BsGithub, BsTwitter} from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <StyledFooter>
        <StyledAddress>
          <Address>
            <AddressHeader> Lagos Nigeria </AddressHeader>
            <AddressParagraph>
              hello@matrix.co <br /> 0807 934 2557, 0813 920 7659 <br /> Yaba College of Technology, <br /> P.M.B 2011 Yaba, Lagos
            </AddressParagraph>
          </Address>
          <Address>
            <AddressHeader> Matrix Virtual Test </AddressHeader>
            <AddressParagraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis. Officia amet quaerat ipsam, ad architecto, corrupti illo sit</AddressParagraph>
          </Address>
          <Address>
            <Logo src={logo } alt='Matrix Logo' />
            <Slogan> Feel Alive </Slogan>
            <SocialLinks>
              <SocialLink href='https://www.facebook.com/jibola.dada.9275?mibextid=ZbWKwL' target='_blank'>
                <Facebook> <FaFacebookF /> </Facebook>
              </SocialLink>
              <SocialLink href='https://www.twitter.com/cascadingGeek' target='_blank'>
                <Twitter> <BsTwitter /> </Twitter>
              </SocialLink>
              <SocialLink href='https://www.linkedin.com/in/ajibola-dada-812101167' target='_blank'>
                <LinkedIn> <FaLinkedinIn /> </LinkedIn>
              </SocialLink>
              <SocialLink href='https://github.com/Geeballer/Matrix-Eye_Diagnostic_System' target='_blank'>
                <Github> <BsGithub /> </Github>
              </SocialLink>
            </SocialLinks>
          </Address>
        </StyledAddress>
        <FooterLine src={line} alt="product line"/>
    </StyledFooter>
  )
}

export default Footer