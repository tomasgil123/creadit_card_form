import React from 'react'
import styled from 'styled-components'
import { colors, boxShadow, space } from 'src/tokens/index'

type ContainerButtonProps = {
  secondary: boolean
}

const ContainerButton = styled.button`
  height: ${space.s12};
  width: 100%;
  outline: none;
  border-width: 0px;
  border: ${(props: ContainerButtonProps) =>
    props.secondary ? `2px solid ${colors.base.primaryGreen}` : `inherit`};
  font-size: ${space.s4} !important;
  max-width: ${space.s64};
  border-radius: 4px;
  color: ${(props: ContainerButtonProps) =>
    props.secondary ? `${colors.base.primaryGreen}` : `${colors.base.white}`};
  background-color: ${(props: ContainerButtonProps) =>
    props.secondary ? `${colors.base.white}` : `${colors.base.primaryGreen}`};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${boxShadow.shadow};
  position: relative;
  top: 0px;
  transition: top ease 0.3s;
  &:active {
    top: 3px;
    box-shadow: none;
  }
`
type MainButtonProps = {
  text: string
  onClickButton: (event: React.MouseEvent<HTMLElement>) => void
  typeButton: string
  secondary: boolean
}

const MainButton: React.FunctionComponent<MainButtonProps> = ({
  text,
  onClickButton,
  typeButton,
  secondary,
}) => {
  return (
    <>
      <ContainerButton secondary={secondary} type={typeButton} onClick={onClickButton}>
        {text}
      </ContainerButton>
    </>
  )
}

export default MainButton
