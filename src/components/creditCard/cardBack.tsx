import * as React from 'react'
import { colors, space, boxShadow, breakpoints } from 'src/tokens'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Container = styled.div`
  padding-top: ${space.s4};
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
    padding-top: ${space.s6};
  }
`

const GrayStripe = styled.div`
  height: ${space.s8};
  background-color: ${colors.base.borders};
  width: 100%;
`

const CVV = styled.span`
  padding-top: ${space.s8};
  padding-left: ${space.s3};
  font-size: ${space.s4};
  color: ${colors.text.primary};
  transform: rotateY(-180deg);
`

type CardBackProps = {
  valueCurrentInput: string
  valuesInputs: Record<string, unknown>
  triggerFlip: boolean
}

const CardBack: React.FunctionComponent<CardBackProps> = ({
  valueCurrentInput,
  valuesInputs,
  triggerFlip,
}) => {
  const CVVNumber = valueCurrentInput['cvv'] ? valueCurrentInput['cvv'] : valuesInputs['cvv']
  return (
    <>
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: triggerFlip ? 180 : 0 }}
        transition={{ duration: 3 }}
        style={{ position: 'absolute' }}
      >
        <Container>
          <GrayStripe />
          <CVV>{CVVNumber}</CVV>
        </Container>
      </motion.div>
    </>
  )
}

export default CardBack
