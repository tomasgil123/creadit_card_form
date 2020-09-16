import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import CardFront from './cardFront'
import CardBack from './cardBack'

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 200px;
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
