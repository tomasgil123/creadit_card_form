/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react'

import InputMask from 'react-input-mask'
import { LabelElement, InputElement, ErrorMessageElement } from 'src/components/form/formComponents'

type CardInputProps = {
  label: string
  name: string
  mask: string
  value: string
  errorMessage: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const CardInput: React.FunctionComponent<CardInputProps> = ({
  label,
  name,
  mask,
  value,
  errorMessage,
  onChange,
}) => {
  const showErrorMessage = errorMessage
  const errorMessageView = showErrorMessage ? (
    <ErrorMessageElement>{errorMessage}</ErrorMessageElement>
  ) : null
  return (
    <>
      <LabelElement>{label}</LabelElement>
      <InputElement error={showErrorMessage}>
        <InputMask
          name={name}
          mask={mask}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          autoFocus
        />
      </InputElement>
      {errorMessageView}
    </>
  )
}

export default CardInput
