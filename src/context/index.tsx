import { createContext } from 'react'

const navigation = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  goToNextStep: () => {},
}

export const PageNavigationContext = createContext(navigation)
