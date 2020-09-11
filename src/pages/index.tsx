import React from 'react'

import MainButton from 'src/components/primitives/mainButton'
import {
  Container,
  Title,
  Subtitle,
  WrapperSubmitSection,
  ContainerSubmitButton,
} from 'src/components/form/formComponents'

const Home: React.FunctionComponent = () => {
  return (
    <Container>
      <Title>First step</Title>
      <Subtitle>
        This is the first step of the form. Keep going to find the simple credit card input
      </Subtitle>
      <WrapperSubmitSection />
      <ContainerSubmitButton>
        <MainButton text="Continue" onClickButton={undefined} typeButton="" secondary={false} />
      </ContainerSubmitButton>
    </Container>
  )
}

export default Home
