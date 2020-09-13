import React from 'react'

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
  return (
    <Container>
      <ContainerFormStep>
        <Title>Second step</Title>
        <Subtitle>
          The purpose of this second step is just to tell to look how nice the progress bar looks.
          Next step is the credit card input, I promise
        </Subtitle>
      </ContainerFormStep>
      <WrapperSubmitSection>
        <ContainerSubmitButton>
          <MainButton text="Continue" onClickButton={undefined} typeButton="" secondary={false} />
        </ContainerSubmitButton>
      </WrapperSubmitSection>
    </Container>
  )
}

export default FirstStep
