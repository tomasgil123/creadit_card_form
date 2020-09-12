import styled from 'styled-components'
import { space, colors, breakpoints } from 'src/tokens'

const Container = styled.div`
  max-width: 500px;
  margin: auto;
  padding-top: ${space.s12};
  min-height: 90vh;
  margin-bottom: ${space.s32};
  padding-left: ${space.s4};
  padding-right: ${space.s4};
  @media (min-width: ${breakpoints.md}) {
    padding-left: 0px;
    padding-right: 0px;
  }
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
  z-index: 9;
  position: fixed;
  bottom: 0px;
  left: 0px;
  border-top: 1px solid ${colors.base.borders};
`
const ContainerSubmitButton = styled.div`
  padding-top: ${space.s4};
  padding-bottom: ${space.s6};
  padding-right: ${space.s4};
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  background-color: ${colors.base.white};
  z-index: 10;
  position: fixed;
  bottom: 0px;
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

export { Container, Title, Subtitle, WrapperSubmitSection, ContainerSubmitButton }
