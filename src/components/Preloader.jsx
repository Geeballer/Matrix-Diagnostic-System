import { RingLoader, BarLoader } from "react-spinners"

import { TransparentBackground, DeepBackground } from "../styled/StyledVariable.styled";

export const Preloader = () => {
  return (
    <DeepBackground>
        <RingLoader 
            color='#fff'
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    </DeepBackground>
  )
}

export const TestLoader = () => {
    return (
      <TransparentBackground>
          <BarLoader 
              color='#fff'
              height={5}
              width={200}
              aria-label="Loading Spinner"
              data-testid="loader"
          />
      </TransparentBackground>
    )
  }