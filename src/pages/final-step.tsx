import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
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
  const [cardInformation, setCardInformation] = useState(null)
  const router = useRouter()

  useEffect(() => {
    if (router && router.query) {
      setCardInformation(router.query)
    }
  }, [])

  return (
    <Container>
      <ContainerTitleStepWithoutForm>
        <Title>Final step</Title>
        <Subtitle>Info completed by the user in the previous step</Subtitle>
        {cardInformation && (
          <>
            {Object.keys(cardInformation).map((pieceOfInformation) => (
              <RowCardInformartion key={pieceOfInformation}>
                <Label>{labels[pieceOfInformation]}</Label>
                <Information>{cardInformation[pieceOfInformation]}</Information>
              </RowCardInformartion>
            ))}
          </>
        )}
      </ContainerTitleStepWithoutForm>
    </Container>
  )
}

export default FinalStep