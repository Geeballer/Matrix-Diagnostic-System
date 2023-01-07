import {Notice, ImageBox, DiagnosisBox, Description, UploadImage} from '../styled/StyledTest.styled'

const ImagePreview = ({label}) => {
  return (
    <DiagnosisBox>
        <Description> {label} </Description>
        <ImageBox>
            <UploadImage type="file" name="file" id="file" accept="image/jpg, image/png, image/jpeg" />
        </ImageBox>
        <Notice> *N.B: Image file upload only supports PNG, JPG and JPEG formats.</Notice>
    </DiagnosisBox>
  )
}

export default ImagePreview