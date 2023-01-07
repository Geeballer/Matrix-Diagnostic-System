import { DiagnosisBox, Description, DiagnosisInput, DiagnosisSelect } from "../styled/StyledTest.styled"
import { useField } from "formik"

export const CustomInput = ({label, ...props}) => {

    const [field, meta] = useField(props)

    const inputError = {
        color: 'red',
        fontSize: '1.3rem',
        fontFamily: 'bahnschrift, oswald',
        marginBottom: '1rem'
    }

  return (
    <DiagnosisBox>
        <Description> {label} </Description>
        <DiagnosisInput {...props} {...field} className={meta.touched && meta.error ? 'input error' : ''}/>
        {meta.touched && meta.error && <span style={inputError}> {meta.error} </span>}
    </DiagnosisBox>
  )
}

export const CustomSelect = ({label, ...props}) => {

    const [field, meta] = useField(props)

    const inputError = {
        color: 'red',
        fontSize: '1.3rem',
        fontFamily: 'bahnschrift, oswald',
        marginBottom: '1rem'
    }

  return (
    <DiagnosisBox>
        <Description> {label} </Description>
        <DiagnosisSelect {...props} {...field} className={meta.touched && meta.error ? 'input error' : ''}/>
        {meta.touched && meta.error && <span style={inputError}> {meta.error} </span>}
    </DiagnosisBox>
  )
}