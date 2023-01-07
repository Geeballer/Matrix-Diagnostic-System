import * as yup from 'yup'

export const ContactSchema = yup.object().shape({
    fullName: yup.string().min(5).required('*Required'),
    email: yup.string().email().required('*Required'),
    phone: yup.number().integer().min(11).required('*Required'),
    message: yup.string().min(30).required('*Required')
  })
  
  export const DiagnosisSchema = yup.object().shape({
    rightVisualAcuity: yup.string().oneOf(['10', '20', '30', '40', '50'], 'Input must be filled').required('*Required'),
    leftVisualAcuity: yup.string().oneOf(['10', '20', '30', '40'], 'Input must be filled').required('*Required'),
    rightPinhole: yup.string().oneOf(['5', '10', '15', '20', '25'], 'Input must be filled').required('*Required'),
    leftPinhole: yup.string().oneOf(['5', '10', '15', '20'], 'Input must be filled').required('*Required'),
    complain: yup.string().oneOf(['blurredVision', 'pain'], 'Input must be filled').required('*Required'),
    slitLamp: yup.string().oneOf(['lids', 'swelling', 'site', 'upperLid'], 'Input must be filled').required('*Required'),
    posteriorSegment: yup.string().oneOf(['retina', 'retinalDetachment', 'rhegmatogenousDetachment', 'maculaOn'], 'Input must be filled').required('*Required'),
    diagnosticClass: yup.string().oneOf(['glaucoma', 'unspecifiedPrimaryAngleClosureGlaucoma'], 'Input must be filled').required('*Required'),
    gender: yup.string().oneOf(['male', 'female'], 'Input must be filled').required('*Required'),
    age: yup.number().integer().min(2).required('*Required')
  })