import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { CreditCardInfoContext } from 'src/context'
import { colors, space } from 'src/tokens'
import styled from 'styled-components'

import {
  Container,
  ContainerTitleStepWithoutForm,
  Title,
  Subtitle,
} from 'src/components/form/formComponents'

const RowCardInformartion = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${space.s3};
  padding-bottom: ${space.s3};
`
const Label = styled.span`
  font-size: ${space.s4};
  color: ${colors.text.secondary};
`
const Information = styled.span`
  font-size: ${space.s4};
  color: ${colors.text.secondary};
`

const labels = {
  cardNumber: 'Card number',
  goodThru: 'Good thru',
  cardOwnerName: 'Card owner name',
  cvv: 'CVV number',
}

const FinalStep: React.FunctionComponent = () => {
  const { state } = useContext(CreditCardInfoContext)

  return (
    <Container>
      <ContainerTitleStepWithoutForm>
        <Title>Final step</Title>
        <Subtitle>Info completed by the user in the previous step</Subtitle>
        {Object.keys(state).map((pieceOfInformation) => (
          <RowCardInformartion key={pieceOfInformation}>
            <Label>{labels[pieceOfInformation]}</Label>
            <Information>{state[pieceOfInformation]}</Information>
          </RowCardInformartion>
        ))}
      </ContainerTitleStepWithoutForm>
    </Container>
  )
}

export default FinalStep
