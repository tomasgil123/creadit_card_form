import styled from 'styled-components'
import { space, colors, breakpoints, boxShadow } from 'src/tokens'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
`

const ContainerTitle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  width: 100%;
  padding-top: ${space.s16};
  padding-left: ${space.s4};
  padding-right: ${space.s4};
  @media (min-width: ${breakpoints.md}) {
    padding-left: 0px;
    padding-right: 0px;
    padding-top: ${space.s24};
  }
`
const ContainerTitleStepWithoutForm = styled(ContainerTitle)`
  flex-grow: 1;
  padding-left: ${space.s3};
  padding-right: ${space.s3};
`

const Title = styled.h2`
  color: ${colors.text.primary};
  font-weight: 600;
`

const Subtitle = styled.div`
  font-size: ${space.s4};
  color: ${colors.text.secondary};
  padding-bottom: ${space.s4};
`

const WrapperSubmitSection = styled.div`
  width: 100%;
  height: ${space.s24};
  background-color: ${colors.base.white};
  display: flex;
  align-items: center;
  z-index: 9;
  border-top: 1px solid ${colors.base.borders};
  position: fixed;
  bottom: 0px;
`
const ContainerSubmitButton = styled.div`
  padding-top: ${space.s4};
  padding-bottom: ${space.s6};
  width: 100%;
  margin: auto;
  max-width: 500px;
  display: flex;
  justify-content: center;
  background-color: ${colors.base.white};
  z-index: 10;
  button {
    width: 50%;
  }
  @media (min-width: ${breakpoints.md}) {
    justify-content: flex-end;
    button {
      width: 100%;
    }
  }
`

const LabelElement = styled.label`
  font-size: ${space.s4};
  font-weight: 500;
  width: 100%;
  display: block;
  color: ${colors.text.primary};
  margin-bottom: ${space.s2};
`

type InputElementProps = {
  error: string
}

const InputElement = styled.div`
  input {
    width: 100%;
    text-transform: uppercase;
    font-size: ${space.s4};
    color: ${colors.text.primary};
    border-width: 1px !important;
    border: 0 solid
      ${(props: InputElementProps) =>
        props.error ? `${colors.text.error}` : `${colors.base.inputBorders}`};
    outline: none !important;
    border-radius: 4px;
    height: ${space.s12};
    box-shadow: ${boxShadow.shadow};
    padding-left: ${space.s2};
    &:focus {
      outline: none !important;
      border: 1px solid ${colors.base.primaryGreen};
      box-shadow: 0 0 10px ${colors.base.secondaryBlue};
    }
  }
`
const ErrorMessageElement = styled.div`
  padding-top: ${space.s3};
  font-size: ${space.s4};
  color: ${colors.text.error};
`

export {
  Container,
  ContainerTitle,
  ContainerTitleStepWithoutForm,
  Title,
  Subtitle,
  WrapperSubmitSection,
  ContainerSubmitButton,
  LabelElement,
  InputElement,
  ErrorMessageElement,
}
