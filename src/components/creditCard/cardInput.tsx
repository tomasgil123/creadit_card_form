import React from 'react'

import InputMask from 'react-input-mask'
import { LabelElement, InputElement, ErrorMessageElement } from 'src/components/form/formComponents'

type CardInputProps = {
  label: string
  key: string
  name: string
  mask: string
  value: string
  errorMessage: string
  touched: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const CardInput: React.FunctionComponent<CardInputProps> = ({
  label,
  key,
  name,
  mask,
  value,
  errorMessage,
  touched,
  onChange,
  onBlur,
}) => {
  const showErrorMessage = errorMessage && touched
  const errorMessageView = showErrorMessage ? (
    <ErrorMessageElement>{errorMessage}</ErrorMessageElement>
  ) : null
  return (
    <>
      <LabelElement>{label}</LabelElement>
      <InputElement error={showErrorMessage}>
        <InputMask
          key={key}
          name={name}
          mask={mask}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      </InputElement>
      {errorMessageView}
    </>
  )
}

export default CardInput
