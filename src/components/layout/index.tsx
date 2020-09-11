import React from 'react'

import Header from 'src/components/header'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
)

export default Layout
