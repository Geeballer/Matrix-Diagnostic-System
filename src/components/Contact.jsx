import {Form, FormText, FormLogo, FormHeader, FormParagraph, FormInputContainer, FormInput, FormTextArea, FormButton, ContactContainerBottom, ContactPhone, ContactEmail} from '../styled/StyledContact.styled'
import { TransparentBackground } from '../styled/StyledVariable.styled'
import { CloseButton } from '../styled/StyledVariable.styled'
import logo from '../assets/logoBlack.png'
import { ContactSchema } from '../Schemas'

import {FaPhoneAlt} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'
import {CgClose} from 'react-icons/cg'
import { useFormik } from 'formik'
import emailjs from 'emailjs-com'
import { useRef } from 'react'

const Contact = ({closeForm}) => {


  const form = useRef()

  const onSubmit = (values, actions) => {
    emailjs.sendForm('service_pgrxlzm', 'template_2y9i6gf', form.current, 'YfB8LJCiCqXUYpkcb')
    actions.resetForm()
  }

  const {values, errors, touched, handleChange, handleSubmit} = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      message: ''
    },
    validationSchema: ContactSchema,
    onSubmit
  })

  const inputError = {
    color: 'red',
    fontSize: '1.3rem',
    fontFamily: 'bahnschrift, oswald',
    marginBottom: '1rem'
  }

  return (
    <TransparentBackground>
      <CloseButton onClick={() => {closeForm(false)}}> <CgClose /> </CloseButton>
      <Form ref={form} onSubmit={handleSubmit}>
        <FormText>
          <FormLogo src={logo} alt="Matrix Logo" />
          <FormHeader> Get in touch with us </FormHeader>
          <FormParagraph> Yes! <br /> You have taken a bold ste by reaching out to us.</FormParagraph>
        </FormText>
        <FormInputContainer>
          <FormInput type="text" name="fullName" id="fullName" placeholder='Full Name' value={values.fullName} onChange={handleChange} /> {errors.fullName && touched.fullName && <span style={inputError}> {errors.fullName}</span>}
          <FormInput type="email" name="email" id="email" placeholder='Email' value={values.email} onChange={handleChange} /> {errors.email && touched.email && <span style={inputError}> {errors.email}</span>}
          <FormInput type="phone" name="phone" id="phone" placeholder='Phone Number' value={values.phone} onChange={handleChange} /> {errors.phone && touched.phone && <span style={inputError}> {errors.phone}</span>}
          <FormTextArea type="text" name="message" id="message" placeholder='Message' value={values.message} onChange={handleChange} /> {errors.message && touched.message && <span style={inputError}> {errors.message}</span>}
          <FormButton type="submit"> Send </FormButton>
        </FormInputContainer>
        <ContactContainerBottom>
          <ContactPhone href='phone:+2348079342557'> <FaPhoneAlt /> +234 807 934 2557</ContactPhone>
          <ContactEmail href='mailto:dadajibolaomotoyosi@gmail.com'> <GrMail /> hello@matrix.co </ContactEmail>
        </ContactContainerBottom>
      </Form>
    </TransparentBackground>    
  )
}

export default Contact