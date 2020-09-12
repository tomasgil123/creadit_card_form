import React from 'react'
import { PageNavigationContext } from 'src/context'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { stepsForm } from 'src/utils'
import { colors } from 'src/tokens'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import Header from 'src/components/header'

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
const Container = styled.div`
  overflow-x: hidden;
`

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const router = useRouter()
  const [showContent, setShowContent] = React.useState(true)
  const [widthProgressBar, setWidthProgressBar] = React.useState(0)

  useEffect(() => {
    const currentStepUrl = router.pathname
    const numberOfPages = stepsForm.length
    const currentStep = stepsForm.find((step) => currentStepUrl.includes(step.url))
    setWidthProgressBar(((currentStep.stepNumber + 1) / numberOfPages) * 100)
    setShowContent(true)
  }, [router.pathname])

  const goToNextStep = () => {
    const currentStepUrl = router.pathname
    const currentStep = stepsForm.find((step) => currentStepUrl.includes(step.url))
    const nextStep = stepsForm.find((step) => step.stepNumber === currentStep.stepNumber + 1)
    setShowContent(false)
    setTimeout(function () {
      router.push({
        pathname: `/${nextStep.url}`,
      })
    }, 500)
  }
  return (
    <Container>
      <Header />
      <ProgressBar width={widthProgressBar} />
      <AnimatePresence>
        {showContent && (
          <motion.div
            key={router.pathname}
            initial={{ x: 300, opacity: 0 }}
            exit={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <PageNavigationContext.Provider value={{ goToNextStep }}>
              {children}
            </PageNavigationContext.Provider>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  )
}

export default Layout
