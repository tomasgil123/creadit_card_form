import styled from 'styled-components'
import { space } from 'src/tokens'

const ContainerForm = styled.form`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ContainerCardAndInput = styled.div`
  flex-grow: 1;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding-left: ${space.s3};
  padding-right: ${space.s3};
`

export { ContainerForm, ContainerCardAndInput }
