import React from 'react'
import * as Yup from 'yup'

import InputMask from 'react-input-mask'
import { Formik } from 'formik'
import MainButton from 'src/components/primitives/mainButton'
import { WrapperSubmitSection, ContainerSubmitButton } from 'src/components/form/formComponents'

//vamos a tener que guardar los datos en algun lado. Context?
//cuando se hace click en siguiente aca queremos que se de vuelta la card

const CardFront: React.FunctionComponent = () => {
  return (
    <Formik
      initialValues={{
        cardNumber: '',
        goodThru: '',
        cardOwnerName: '',
      }}
      validationSchema={Yup.object().shape({
        cardNumber: Yup.string()
          .test(
            'len',
            'Intenta que el título no tenga mas de 75 caracteres',
            (val) => !val || val.toString().length < 76
          )
          .required('Please, complete with your credit card number'),
        goodThru: Yup.string().required(
          'Please, complete with the good thru date of your credit card'
        ),
        cardOwnerName: Yup.string().required(
          'Please, complete with name which appears in your credit card'
        ),
      })}
      onSubmit={(values) => {
        console.log('values', values)
      }}
    >
      {(formProps) => (
        <form onSubmit={formProps.handleSubmit}>
          <div>{formProps.values.cardNumber}</div>
          <InputMask
            key="cardNumber"
            name="cardNumber"
            mask="9999 9999 9999 9999"
            onChange={formProps.handleChange}
            onBlur={formProps.handleBlur}
            value={formProps.values.cardNumber}
          />
          <InputMask
            key="goodThru"
            name="goodThru"
            mask="99/99"
            onChange={formProps.handleChange}
            onBlur={formProps.handleBlur}
            value={formProps.values.goodThru}
          />
          <input
            key="cardOwnerName"
            name="cardOwnerName"
            onChange={formProps.handleChange}
            onBlur={formProps.handleBlur}
            value={formProps.values.cardOwnerName}
          />
          <WrapperSubmitSection>
            <ContainerSubmitButton>
              <MainButton
                text="Continue"
                onClickButton={undefined}
                typeButton="submit"
                secondary={false}
              />
            </ContainerSubmitButton>
          </WrapperSubmitSection>
        </form>
      )}
    </Formik>
  )
}

export default CardFront
