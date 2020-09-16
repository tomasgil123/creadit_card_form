import React from 'react'

import CreditCard from 'src/components/creditCard'
import { Container, ContainerTitle, Title, Subtitle } from 'src/components/form/formComponents'

const CardStep: React.FunctionComponent = () => {
  return (
    <Container>
      <ContainerTitle>
        <Title>Card step</Title>
        <Subtitle>Complete with your credit card info</Subtitle>
      </ContainerTitle>
      <CreditCard />
    </Container>
  )
}

export default CardStep
