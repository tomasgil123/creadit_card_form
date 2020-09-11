import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
`

type Props = {
  name: string
}

const Home: React.FunctionComponent<Props> = ({ name }) => (
  <div>
    <p>Hello {name}!</p>
    <Title>Title</Title>
  </div>
)

export default Home
