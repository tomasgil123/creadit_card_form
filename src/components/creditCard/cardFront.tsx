import React from 'react'
import { colors, space, boxShadow, breakpoints } from 'src/tokens'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { CardInputs } from 'src/types/card'

const Container = styled.div`
  padding: ${space.s3};
  display: flex;
  flex-direction: column;
  height: 152px;
  width: 240px;
  border-radius: 15px;
  background-color: #ffd675;
  box-shadow: ${boxShadow.shadow};
  @media (min-width: ${breakpoints.md}) {
    height: 190px;
    width: 300px;
  }
`

const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const CardNumber = styled.div`
  font-size: ${space.s4};
  color: ${colors.text.primary};
  @media (min-width: ${breakpoints.md}) {
    font-size: ${space.s5};
  }
`

const CardNumberContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding-left: ${space.s3};
`

const CardOwnerName = styled.span`
  font-size: ${space.s3};
  color: ${colors.text.primary};
  padding-left: ${space.s3};
  text-transform: uppercase;
  @media (min-width: ${breakpoints.md}) {
    font-size: ${space.s4};
  }
`
const GoodThru = styled.span`
  font-size: ${space.s3};
  color: ${colors.text.primary};
  @media (min-width: ${breakpoints.md}) {
    font-size: ${space.s3};
  }
`

const CardChip = styled.img`
  height: ${space.s12};
  @media (min-width: ${breakpoints.md}) {
    height: ${space.s16};
  }
`
const CardLogo = styled.img`
  height: ${space.s6};
  @media (min-width: ${breakpoints.md}) {
    height: ${space.s16};
  }
`
const showCardLogo = (cardNumber) => {
  if (cardNumber[0] === '3') {
    return <CardLogo src="/amex.png" alt="Card logo" />
  }
  if (cardNumber[0] === '4') {
    return <CardLogo src="/visa.png" alt="Card logo" />
  }
  if (cardNumber[0] === '5') {
    return <CardLogo src="/mastercard.png" alt="Card logo" />
  }
  if (cardNumber[0] === '6') {
    return <CardLogo src="/discover.png" alt="Card logo" />
  }
  return null
}

type CardFrontProps = {
  valueCurrentInput: CardInputs
  valuesInputs: Record<string, unknown>
  triggerFlip: boolean
}

const CardFront: React.FunctionComponent<CardFrontProps> = ({
  valueCurrentInput,
  valuesInputs,
  triggerFlip,
}) => {
  const cardNumber = valueCurrentInput['cardNumber']
    ? valueCurrentInput['cardNumber'].replace(/[^a-z\d\s]+/gi, '')
    : valuesInputs['cardNumber']
  const goodThru = valueCurrentInput['goodThru']
    ? valueCurrentInput['goodThru']
    : valuesInputs['goodThru']
  const cardOwnerName = valueCurrentInput['cardOwnerName']
    ? valueCurrentInput['cardOwnerName']
    : valuesInputs['cardOwnerName']

  return (
    <>
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: triggerFlip ? -180 : 0 }}
        transition={{ duration: 3 }}
        style={{ backfaceVisibility: 'hidden', position: 'absolute' }}
      >
        <Container>
          <Row>
            <CardChip src="/card_chip.png" alt="card chip" />
            {showCardLogo(cardNumber)}
          </Row>
          <CardNumberContainer>
            <CardNumber>{cardNumber}</CardNumber>
          </CardNumberContainer>
          <Row>
            <CardOwnerName>{cardOwnerName}</CardOwnerName>
            <GoodThru>{goodThru}</GoodThru>
          </Row>
        </Container>
      </motion.div>
    </>
  )
}

export default CardFront
