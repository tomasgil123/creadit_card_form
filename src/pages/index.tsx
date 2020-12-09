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

const FirstStep: React.FunctionComponent = () => {
  const { goToNextStep } = useContext(PageNavigationContext)
  return (
    <Container>
      <ContainerTitleStepWithoutForm>
        <Title>First step</Title>
        <Subtitle>
          This is the first step of the form. Keep going to find the simple credit card input
        </Subtitle>
      </ContainerTitleStepWithoutForm>
      <WrapperSubmitSection>
        <ContainerSubmitButton>
          <MainButton
            text="Continue"
            onClickButton={goToNextStep}
            typeButton="button"
            secondary={false}
            data-cy={`ButtonFirstStep`}
          />
        </ContainerSubmitButton>
      </WrapperSubmitSection>
    </Container>
  )
}

export default FirstStep
