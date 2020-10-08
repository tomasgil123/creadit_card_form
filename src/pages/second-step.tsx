import React from 'react'
import { useContext } from 'react'
import { PageNavigationContext } from 'src/context'

import MainButton from 'src/components/primitives/mainButton'
import {
  Container,
  ContainerTitleStepWithoutForm,
  Title,
  Subtitle,
  WrapperSubmitSection,
  ContainerSubmitButton,
} from 'src/components/form/formComponents'

const SecondStep: React.FunctionComponent = () => {
  const { goToNextStep } = useContext(PageNavigationContext)
  return (
    <Container>
      <ContainerTitleStepWithoutForm>
        <Title>Second step</Title>
        <Subtitle>
          The purpose of this second step is just to tell to look how nice the progress bar looks.
          Next step is the credit card input, I promise
        </Subtitle>
      </ContainerTitleStepWithoutForm>
      <WrapperSubmitSection>
        <ContainerSubmitButton>
          <MainButton
            text="Continue"
            onClickButton={goToNextStep}
            typeButton="button"
            secondary={false}
          />
        </ContainerSubmitButton>
      </WrapperSubmitSection>
    </Container>
  )
}

export default SecondStep
