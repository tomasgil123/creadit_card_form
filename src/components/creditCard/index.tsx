import React, { useState } from 'react'
import { useRouter } from 'next/router'

import StepCardForm from './stepCardForm'

const listInputs = [
  { name: 'cardNumber', position: 0 },
  { name: 'goodThru', position: 1 },
  { name: 'cardOwnerName', position: 2 },
  { name: 'cvv', position: 3 },
]

type nextInputArg = {
  value: string
}

const CreditCard: React.FunctionComponent = () => {
  const router = useRouter()
  //the first input we will ask user to complete is the card number
  const [currentCardInput, setcurrentCardInput] = useState('cardNumber')
  const [creditCardInfo, setCreditCardInfo] = useState({
    cardNumber: '',
    goodThru: '',
    cardOwnerName: '',
    cvv: '',
  })

  const nextInput = (value: nextInputArg) => {
    setCreditCardInfo({ ...creditCardInfo, [currentCardInput]: value })
    const currentInput = listInputs.find((input) => currentCardInput === input.name)
    //is input last?
    if (currentInput.position + 1 === listInputs.length) {
      router.push({
        pathname: `/final-step`,
        query: { ...creditCardInfo },
      })
    }
    const nextInput = listInputs.find((input) => input.position === currentInput.position + 1)
    setcurrentCardInput(nextInput.name)
  }
  return (
    <StepCardForm
      currentCardInput={currentCardInput}
      nextInput={nextInput}
      valuesInputs={creditCardInfo}
    />
  )
}

export default CreditCard
