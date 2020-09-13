import React from 'react'
import styled from 'styled-components'
import { colors, space, breakpoints } from 'src/tokens'

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: ${colors.base.white};
  z-index: 101;
  font-size: ${space.s4};
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  text-align: center;
  padding-top: ${space.s2};
  padding-bottom: ${space.s2};
  width: 100%;
  flex-grow: 1;
  @media (min-width: ${breakpoints.md}) {
    text-align: left;
    padding-left: ${space.s12};
    padding-right: ${space.s12};
  }
  @media (min-width: ${breakpoints.lg}) {
    text-align: left;
    padding-left: ${space.s24};
    padding-right: ${space.s24};
  }
`

const Title = styled.span`
  color: ${colors.base.primaryGreen};
  font-weight: 900;
  font-size: ${space.s6};
  cursor: pointer;
  @media (min-width: ${breakpoints.md}) {
    font-size: ${space.s8};
  }
`

type ProgressBarProps = {
  width: number
}

const ProgressBar = styled.div`
  width: ${(props: ProgressBarProps) => `${props.width}%`};
  position: relative;
  top: 0;
  left: 0;
  height: 4px;
  background: ${colors.base.primaryGreen};
  transition: width 0.5s;
  &:after {
    content: '';
    width: 100vw;
    height: 4px;
    background: #dfe4e7;
    position: absolute;
    z-index: -1;
  }
`
type HeaderProps = {
  width: number
}

const Header: React.FunctionComponent<HeaderProps> = ({ width }) => {
  console.log('width', width)
  return (
    <HeaderWrapper>
      <Container>
        <Title>Creadit card form</Title>
      </Container>
      <ProgressBar width={width} />
    </HeaderWrapper>
  )
}

export default Header
