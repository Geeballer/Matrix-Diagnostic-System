import React, { useEffect, useState } from 'react'
import { CgClose } from 'react-icons/cg'

import { TransparentBackground } from '../styled/StyledVariable.styled'
import { StyledResult } from '../styled/StyledResult.styled'
import { TestLoader } from './Preloader'
import { CloseButton } from '../styled/StyledVariable.styled'

const Result = ({closeResult}) => {

  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 8000)
  }, [])

  return (
    <>
      {loader ?
        <TestLoader />
        :
        <TransparentBackground>
        <CloseButton onClick={() => {closeResult(false)}}> <CgClose /> </CloseButton>
          <StyledResult>
            <h1>Result!!!!</h1>
          </StyledResult>
        </TransparentBackground>
      }
    </>
  )
}

export default Result