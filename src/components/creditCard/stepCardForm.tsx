import React, { useState } from 'react'
import * as Yup from 'yup'

import CardInput from './cardInput'
import MainButton from 'src/components/primitives/mainButton'
import Card from './card'
import { WrapperSubmitSection, ContainerSubmitButton } from 'src/components/form/formComponents'
import { ContainerForm, ContainerCardAndInput } from './general'

//we decide not to pass each mini form validation schema as a prop since it was difficult to say which shape
//it had beforehand. We couldnt find a way to put in the interface something like validationSchema: typeof<yup validation schema>
const validationSchemas = {
  cardNumber: {
    cardNumber: Yup.string()
      .test(
        'len',
        'It seems some numbers are missing. Please, be sure to complete with the 16 numbers on the front of your card',
        (val) => {
          return !val || val.toString().replace(/\D/g, '').length === 16
        }
      )
      .required('Please, complete with your credit card number'),
  },
  goodThru: {
    goodThru: Yup.string().required('Please, complete with the good thru date of your credit card'),
  },
  cardOwnerName: {
    cardOwnerName: Yup.string().required(
      'Please, complete with name which appears in your credit card'
    ),
  },
  cvv: {
    cvv: Yup.string().required(
      'Please, complete with the cvv number which appears on the back of your card'
    ),
  },
}

const inputMasks = {
  cardNumber: '9999 9999 9999 9999',
  goodThru: '99/99',
  cardOwnerName: '',
  cvv: '999',
}

const inputLabels = {
  cardNumber: 'Card number',
  goodThru: 'Good thru',
  cardOwnerName: 'Card owner name',
  cvv: 'CVV number',
}

type CardFormProps = {
  currentCardInput: string
  valuesInputs: Record<string, unknown>
  nextInput: (values) => void
}

//Formik wasnt working with react-input-mask
//user has to complete 4 values which are completed secuencially and showing only one at a time

const StepCardForm: React.FunctionComponent<CardFormProps> = ({
  currentCardInput,
  nextInput,
  valuesInputs,
}) => {
  const [valueInput, setValueInput] = useState({
    cardNumber: '',
    goodThru: '',
    cardOwnerName: '',
    cvv: '',
  })
  const [errorMessage, setErrorMessage] = useState(null)

  const onChangeValueInput = (value) => {
    const newValue = {}
    newValue[currentCardInput] = value
    setErrorMessage(null)
    setValueInput({ ...valueInput, ...newValue })
  }

  const onHandleSubmit = async (e) => {
    e.preventDefault()
    const objectToValidate = {}
    objectToValidate[currentCardInput] = valueInput[currentCardInput]

    try {
      await Yup.object(validationSchemas[currentCardInput]).validate(objectToValidate)
      nextInput(valueInput)
    } catch (err) {
      setErrorMessage(err['errors'][0])
    }
  }

  return (
    <ContainerForm onSubmit={(e) => onHandleSubmit(e)}>
      <ContainerCardAndInput>
        <Card
          valuesInputs={valuesInputs}
          valueCurrentInput={valueInput}
          nameCurrentInput={currentCardInput}
        />
        <CardInput
          label={inputLabels[currentCardInput]}
          name={currentCardInput}
          mask={inputMasks[currentCardInput]}
          errorMessage={errorMessage}
          onChange={onChangeValueInput}
          value={valueInput[currentCardInput]}
        />
      </ContainerCardAndInput>
      <WrapperSubmitSection>
        <ContainerSubmitButton>
          <MainButton
            text="Continue"
            onClickButton={undefined}
            typeButton={'submit'}
            secondary={false}
          />
        </ContainerSubmitButton>
      </WrapperSubmitSection>
    </ContainerForm>
  )
}

export default StepCardForm
