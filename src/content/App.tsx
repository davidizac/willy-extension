import { ChakraProvider } from '@chakra-ui/react'
import * as React from 'react'

import WillyContainer from './src'

// 1. import `ChakraProvider` component

export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <WillyContainer />
    </ChakraProvider>
  )
}
