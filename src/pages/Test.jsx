import { useState } from "react"
import { Formik, Form } from "formik"

import { StyledTest, DiagnosisHeader, DaignosisForm, DiagnosisBox, Description, DiagnosisInput, DiagnosisLabel, DiagnosisButton, DiagnosisOption } from "../styled/StyledTest.styled"
import NavBar from '../components/NavBar'
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import logoImage from '../assets/logoBlack.png'
import Result from "../components/Result"
import { DiagnosisSchema } from "../Schemas"
import { CustomInput, CustomSelect } from "../components/Custom"
import ImageSelect from "../components/ImageSelect"

const Test = () => {

  const [modal, setModal] = useState(false)
  const [result, setResult] = useState(false)

  const onSubmit = (values, actions, e) => {
    e.preventDefault()
    actions.resetForm()
  } 

  const showResult = () => {
    if (onSubmit === true){
      console.log('Hurray!')
    }else{
      return
    }
  }

  return (
    <StyledTest>
      <NavBar 
        setModal={setModal}
        color = '#000'
        borderColor = '#000'
        logo = {logoImage}
        backgroundColor = '#fff'
        boxShadow = '0 2px 5px 5px rgba(0, 0, 0, .2)'
        iconColorOne = '#fff'
        iconColorTwo = '#000'
      />
      <DaignosisForm>
        <DiagnosisHeader> Diagnosis Form </DiagnosisHeader>
          <Formik initialValues={{age: '', gender: '', complain: '', rightVisualAcuity: '', leftVisualAcuity: '', leftPinhole: '', rightPinhole: '', slitLamp: '', posteriorSegment: '', disagnosticClass: ''}} validationSchema={DiagnosisSchema} onSubmit={showResult()}>
            {(props) => (
              <Form>
                <CustomInput 
                  label='Age'
                  name='age'
                  type='number'
                />
                <DiagnosisBox>
                  <Description> Gender </Description>
                  <DiagnosisLabel>
                    Male
                    <DiagnosisInput type="radio" name='gender' checked />
                    <span></span>
                  </DiagnosisLabel>
                  <DiagnosisLabel>
                    Female
                    <DiagnosisInput type="radio" name='gender'/>
                    <span></span>
                  </DiagnosisLabel>
                </DiagnosisBox>
                <CustomSelect 
                  label='Complain'
                  name='complain'
                >
                  <DiagnosisOption value='' placeholder='Please select a complain'>Please select a complain</DiagnosisOption>
                  <DiagnosisOption value='blurredVision'>Blurred Vision</DiagnosisOption>
                  <DiagnosisOption value='pain'>Pain</DiagnosisOption>
                </CustomSelect>
                <CustomSelect 
                  label='VA_OD'
                  name='rightVisualAcuity'
                >
                  <DiagnosisOption value=''>Please select your right eye visual acuity value</DiagnosisOption>
                  <DiagnosisOption value='10'>10</DiagnosisOption>
                  <DiagnosisOption value='20'>20</DiagnosisOption>
                  <DiagnosisOption value='30'>30</DiagnosisOption>
                  <DiagnosisOption value='40'>40</DiagnosisOption>
                  <DiagnosisOption value='50'>50</DiagnosisOption>
                </CustomSelect>
                <CustomSelect 
                  label='VA_OS'
                  name='leftVisualAcuity'
                >
                  <DiagnosisOption value=''>Please select your left eye visual acuity value</DiagnosisOption>
                  <DiagnosisOption value='10'>10</DiagnosisOption>
                  <DiagnosisOption value='20'>20</DiagnosisOption>
                  <DiagnosisOption value='30'>30</DiagnosisOption>
                  <DiagnosisOption value='40'>40</DiagnosisOption>
                </CustomSelect>
                <CustomSelect 
                  label='PH_OD'
                  name='rightPinhole'
                >
                  <DiagnosisOption value=''>Please select your right eye pinhole value</DiagnosisOption>
                  <DiagnosisOption value='5'>5</DiagnosisOption>
                  <DiagnosisOption value='10'>10</DiagnosisOption>
                  <DiagnosisOption value='15'>15</DiagnosisOption>
                  <DiagnosisOption value='20'>20</DiagnosisOption>
                  <DiagnosisOption value='25'>25</DiagnosisOption>
                </CustomSelect>
                <CustomSelect 
                  label='PH_OS'
                  name='leftPinhole'
                >
                  <DiagnosisOption value=''>Please select your left eye pinhole value</DiagnosisOption>
                  <DiagnosisOption value='5'>5</DiagnosisOption>
                  <DiagnosisOption value='10'>10</DiagnosisOption>
                  <DiagnosisOption value='15'>15</DiagnosisOption>
                  <DiagnosisOption value='20'>20</DiagnosisOption>
                </CustomSelect>
                <CustomSelect 
                  label='Slit Lamp Exam'
                  name='slitLamp'
                >
                  <DiagnosisOption value=''>Please select a symptom obtained</DiagnosisOption>
                  <DiagnosisOption value='lids'>Lids</DiagnosisOption>
                  <DiagnosisOption value='swelling'>Swelling</DiagnosisOption>
                  <DiagnosisOption value='site'>Site</DiagnosisOption>
                  <DiagnosisOption value='upperLid'>Upper Lid</DiagnosisOption>
                </CustomSelect>
                <CustomSelect 
                  label='Posterior Segment Exam'
                  name='posteriorSegment'
                >
                  <DiagnosisOption value=''>Please select a posterior segment</DiagnosisOption>
                  <DiagnosisOption value='retina'>Retina</DiagnosisOption>
                  <DiagnosisOption value='retinalDetachment'>Retinal Detachment</DiagnosisOption>
                  <DiagnosisOption value='rhegmatogenousDetachment'>Rhegmatogenous Detachment</DiagnosisOption>
                  <DiagnosisOption value='maculaOn'>Macula On</DiagnosisOption>
                </CustomSelect>
                <CustomSelect 
                  label='Diagnosis Class'
                  name='diagnosticClass'
                >
                  <DiagnosisOption value=''>Please select a diagnostic class</DiagnosisOption>
                  <DiagnosisOption value='glaucoma'>Glaucoma</DiagnosisOption>
                  <DiagnosisOption value='unspecifiedPrimaryAngleClosureGlaucoma'>Unspecified primary angle-closure glaucoma</DiagnosisOption>
                </CustomSelect>
                <ImageSelect />
                <ImageSelect />
                <DiagnosisButton type="submit"> Diagnose </DiagnosisButton>
              </Form>
            )}
          </Formik> 
      </DaignosisForm>
      {modal && <Contact closeForm={setModal}/>}
      {result && <Result closeResult={setResult} />}
      <Footer />
    </StyledTest>
  )
}

export default Test

/*
onClick={() => {setResult(true)}}
*/