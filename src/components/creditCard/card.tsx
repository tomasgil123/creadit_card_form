import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { space, breakpoints } from 'src/tokens'

import CardFront from './cardFront'
import CardBack from './cardBack'

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 160px;
  margin-top: ${space.s3};
  margin-bottom: ${space.s3};
  @media (min-width: ${breakpoints.md}) {
    height: 200px;
    margin-top: ${space.s5};
    margin-bottom: ${space.s5};
  }
`

type CardProps = {
  nameCurrentInput: string
  valueCurrentInput: string
  valuesInputs: Record<string, unknown>
}

const Card: React.FunctionComponent<CardProps> = ({
  nameCurrentInput,
  valueCurrentInput,
  valuesInputs,
}) => {
  const [triggerFlip, setTriggerFlip] = useState(false)

  useEffect(() => {
    //we want to flip the card when the user gets to the cvv input
    if (nameCurrentInput === 'cvv') {
      setTriggerFlip(true)
    }
  }, [nameCurrentInput])

  return (
    <Container>
      <CardBack
        valueCurrentInput={valueCurrentInput}
        valuesInputs={valuesInputs}
        triggerFlip={triggerFlip}
      />
      <CardFront
        valueCurrentInput={valueCurrentInput}
        valuesInputs={valuesInputs}
        triggerFlip={triggerFlip}
      />
    </Container>
  )
}

export default Card
