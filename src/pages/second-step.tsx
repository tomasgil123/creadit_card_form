import React from 'react'

import MainButton from 'src/components/primitives/mainButton'
import {
  Container,
  Title,
  Subtitle,
  WrapperSubmitSection,
  ContainerSubmitButton,
} from 'src/components/form/formComponents'

const FirstStep: React.FunctionComponent = () => {
  return (
    <Container>
      <Title>Second step</Title>
      <Subtitle>
        The purpose of this second step is just to tell to look how nice the progress bar looks.
        Next step is the credit card input, I promise
      </Subtitle>
      <WrapperSubmitSection />
      <ContainerSubmitButton>
        <MainButton text="Continue" onClickButton={undefined} typeButton="" secondary={false} />
      </ContainerSubmitButton>
    </Container>
  )
}

export default FirstStep
