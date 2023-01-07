import { StyledAbout, Banner, BannerTextContainer, BannerText, ProductLine, AboutSection, AboutSectionText, AboutTextDescription, AboutTextHeader, AboutTextParagraph, AboutImageContainer, AboutImage, BannerAttached, BannerAttachedTextContainer, BannerAttachedHeader, BannerAttachedParagraph, BottomSection, BottomSectionHeader, BottomSectionParagraph } from "../styled/StyledAbout.styled"
import Contact from "../components/Contact"
import logoImage from '../assets/logoWhite.png'
import line from '../assets/productLine.png'
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

import { useState } from "react"

const About = () => {

  const [modal, setModal] = useState(false)

  return (
    <StyledAbout>
      <Banner>
        <NavBar 
          setModal = {setModal}
          color = '#fff'
          borderColor = '#fff'
          logo={logoImage}
          backgroundColor = 'transparent'
          iconColorOne = '#fff'
          iconColorTwo = '#fff'
        />
        <BannerTextContainer>
          <BannerText> It is not <br /> what you look at that  matters, <br /> it is what you see.
          </BannerText>
          <ProductLine src={line} alt='Line' />
        </BannerTextContainer>
      </Banner>
      <AboutSection>
        <AboutImageContainer>
          <AboutImage src="https://thumbs.dreamstime.com/b/eye-doctor-banner-flat-cartoon-poster-optometrist-ophthalmologist-medical-staff-people-glasses-letter-vision-test-158504267.jpg" alt="opthal. Image" />
        </AboutImageContainer>
        <AboutSectionText>
          <AboutTextDescription> What we do: </AboutTextDescription>
          <AboutTextHeader> We are an <br /> eye care specialist </AboutTextHeader>
          <AboutTextParagraph> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, expedita fuga ea praesentium magnam itaque, repellat illo, nesciunt rerum quasi autem voluptates doloribus? Esse facilis commodi aliquam, magnam voluptates qui.
          Facilis fuga provident atque veritatis quisquam doloribus tempore! Hic quasi aspernatur necessitatibus illum pariatur doloremque recusandae tempore totam quia? Incidunt numquam alias reiciendis placeat debitis dicta facere deserunt mollitia dolorem!
          Labore, necessitatibus. Inventore porro voluptatum aut rerum recusandae commodi, odit sequi. Facilis, quaerat vero accusantium adipisci fuga asperiores corrupti ex sit nobis, laborum voluptate veniam necessitatibus ipsum molestiae fugit repellendus.
          Ipsa natus autem explicabo mollitia laudantium consequatur, quidem provident, voluptatum enim harum ducimus fuga totam quos maiores dolore reiciendis optio cum! Enim placeat quo dicta dolorem deserunt rem illum repellat!
          Possimus culpa error quidem distinctio, quae debitis laborum? Magnam, aliquid? Eum, vitae! Aut ut molestias inventore deleniti, ratione corrupti at consequatur officiis? Eos cupiditate libero consequuntur, mollitia quo facere quos.
          </AboutTextParagraph>
          <ProductLine src={line} alt='Line' />
        </AboutSectionText>
      </AboutSection>
      <BannerAttached>
        <BannerAttachedTextContainer>
          <BannerAttachedHeader>
            We put your vision <br /> first, then every <br /> other thing follows.
          </BannerAttachedHeader>
          <BannerAttachedParagraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, hic quibusdam sunt libero doloribus voluptas iusto, assumenda quaerat pariatur aperiam sint mollitia vel nihil magnam ex labore illum? Vero, modi.
          </BannerAttachedParagraph>
          <ProductLine src={line} alt='Line' />
        </BannerAttachedTextContainer>
      </BannerAttached>
      {modal && <Contact closeForm={setModal}/>}
      <BottomSection>
        <BottomSectionHeader>
          Would you like to perform an initial <br /> eye test in the comfort of your own home?
        </BottomSectionHeader>
        <BottomSectionParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatem eligendi quia laboriosam! Asperiores nisi doloribus consectetur, molestias exercitationem qui sed? Omnis minus ipsa quos ipsam assumenda. Ipsam, doloribus fuga.
          Quis rerum deserunt debitis inventore sequi repellendus natus tempore, soluta doloremque asperiores quas ad, culpa officia quos molestias impedit sapiente! Quas enim modi assumenda in accusamus reiciendis sunt ratione minus?
          Sapiente unde inventore aut debitis modi placeat, enim necessitatibus nemo saepe fuga consectetur. Dolores quam hic accusantium suscipit numquam dolorem, similique omnis nobis ducimus quasi repellendus sequi, optio deleniti impedit!
        </BottomSectionParagraph>
      </BottomSection>
      <Footer />
    </StyledAbout>
  )
}

export default About