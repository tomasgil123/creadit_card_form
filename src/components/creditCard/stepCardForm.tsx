import React from 'react'
import * as Yup from 'yup'

import CardInput from './cardInput'
import { Formik } from 'formik'
import MainButton from 'src/components/primitives/mainButton'
import { WrapperSubmitSection, ContainerSubmitButton } from 'src/components/form/formComponents'
import { ContainerForm, ContainerCardAndInput } from './general'

//Como le paso props a la card?

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
}

const inputMasks = {
  cardNumber: '9999 9999 9999 9999',
  goodThru: '99/99',
  cardOwnerName: '',
}

const inputLabels = {
  cardNumber: 'Card number',
  goodThru: 'Good thru',
  cardOwnerName: 'Card owner name',
}

type CardFormProps = {
  currentCardInput: string
  nextInput: (values) => void
}

const StepCardForm: React.FunctionComponent<CardFormProps> = ({ currentCardInput, nextInput }) => {
  return (
    <Formik
      initialValues={{
        [currentCardInput]: '',
      }}
      validationSchema={Yup.object().shape(validationSchemas[currentCardInput])}
      onSubmit={(values) => {
        nextInput(values[currentCardInput])
      }}
    >
      {({ errors, handleChange, handleBlur, handleSubmit, values, touched }) => (
        <ContainerForm onSubmit={handleSubmit}>
          <ContainerCardAndInput>
            <CardInput
              label={inputLabels[currentCardInput]}
              key={currentCardInput}
              name={currentCardInput}
              mask={inputMasks[currentCardInput]}
              errorMessage={errors[currentCardInput]}
              touched={touched[currentCardInput]}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[currentCardInput]}
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
      )}
    </Formik>
  )
}

export default StepCardForm
