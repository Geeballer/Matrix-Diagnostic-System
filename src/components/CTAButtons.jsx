import { BottomButtonContainer } from "../styled/StyledCTAButtons.styled"

import {Link} from 'react-router-dom'

const CTAButtons = ({setModal}) => {
  return (
    <BottomButtonContainer>
      <Link to='#' onClick={() => {setModal(true)}}> Contact </Link>
      <Link to='/diagnose'> Run Test </Link>
    </BottomButtonContainer>
  )
}

export default CTAButtons