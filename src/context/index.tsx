/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react'

const dispatch = {
  saveFormInputs: (inputValues: any) => {},
  state: {},
}

export const CreditCardInfoContext = createContext(dispatch)

export function CreditCardProvider({ children }) {
  const [state, dispatch] = useState({
    cardNumber: '',
    goodThru: '',
    cardOwnerName: '',
    cvv: '',
  })

  const saveFormInputs = (inputValues) => {
    dispatch(inputValues)
  }

  return (
    <CreditCardInfoContext.Provider value={{ saveFormInputs: saveFormInputs, state: state }}>
      {children}
    </CreditCardInfoContext.Provider>
  )
}

const navigation = {
  goToNextStep: () => {},
}

export const PageNavigationContext = createContext(navigation)
