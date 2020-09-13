import React from 'react'
import { useContext } from 'react'
import { PageNavigationContext } from 'src/context'

import MainButton from 'src/components/primitives/mainButton'
import {
  Container,
  ContainerFormStep,
  Title,
  Subtitle,
  WrapperSubmitSection,
  ContainerSubmitButton,
} from 'src/components/form/formComponents'

const FirstStep: React.FunctionComponent = () => {
  const { goToNextStep } = useContext(PageNavigationContext)
  return (
    <Container>
      <ContainerFormStep>
        <Title>First step</Title>
        <Subtitle>
          This is the first step of the form. Keep going to find the simple credit card input
        </Subtitle>
      </ContainerFormStep>
      <WrapperSubmitSection>
        <ContainerSubmitButton>
          <MainButton
            text="Continue"
            onClickButton={goToNextStep}
            typeButton=""
            secondary={false}
          />
        </ContainerSubmitButton>
      </WrapperSubmitSection>
    </Container>
  )
}

export default FirstStep
