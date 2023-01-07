import {Link} from 'react-router-dom'

import { StyledPolicy, PolicyContainer, PolicyHeader, PolicyText, AgreementText } from '../styled/StyledPolicy.styled'
import { TransparentBackground } from '../styled/StyledVariable.styled'

const Policy = ({acceptPolicy}) => {
  return (
    <TransparentBackground>
        <StyledPolicy>
            <PolicyContainer>
                <PolicyHeader>
                    Privacy Policy
                </PolicyHeader>

                <PolicyText>
                    Hello there,
                </PolicyText>

                <PolicyText>
                Your privacy is important to us. It is <strong>Matrix's</strong> policy to respect your privacy regarding any information we may collect from you on our website.
                </PolicyText>

                <PolicyText>
                We only ask for personal information when we truly need it to provide a service to you. We collect it by fair lawful means, with your knowledge and consent. We also let you know why we are collecting it how it will be used.
                </PolicyText>

                <PolicyText>
                We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we will protect within commercially acceptable means to prevent loss and theft, as well as unathorised access, disclosure, copying, use or modification.
                </PolicyText>

                <PolicyText>
                We do not share any personally identifying information publicly or with third-parties, except when required to be law.
                </PolicyText>

                <PolicyText>
                Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites and cannot accept responsibilty or liability for their respective privacy policies.
                </PolicyText>

                <PolicyText>
                You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
                </PolicyText>

                <PolicyText>
                Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
                </PolicyText>
            </PolicyContainer>
            <AgreementText>
                I agree to the terms of service and i read the privacy policy.
            </AgreementText>
            <Link to='/' onClick={() => {acceptPolicy(false)}}> Accept </Link>
        </StyledPolicy>
    </TransparentBackground>
  )
}

export default Policy