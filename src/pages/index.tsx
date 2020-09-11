import React from 'react'

type Props = {
  name: string
}

const Home: React.FunctionComponent<Props> = ({ name }) => (
  <div>
    <p>Hello {name}!</p>
  </div>
)

export default Home
