import React from 'react'
import styled from 'styled-components'
import { colors, space, breakpoints } from 'src/tokens'

const HeaderWrapper = styled.div`
  position: 'relative';
  top: 0px;
  left: 0px;
  background-color: ${colors.base.white};
  z-index: 101;
  font-size: ${space.s4};
`

const Container = styled.div`
  text-align: center;
  padding-top: ${space.s2};
  padding-bottom: ${space.s2};
  width: 100%;
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

const Header: React.FunctionComponent = () => (
  <HeaderWrapper>
    <Container>
      <Title>Creadit card form</Title>
    </Container>
  </HeaderWrapper>
)

export default Header
