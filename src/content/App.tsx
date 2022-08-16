import { ChakraProvider, extendTheme, Button, Box } from '@chakra-ui/react'
import root from 'react-shadow/emotion'
import { theme } from './src/theme'
import EditorContainer from './src/components/EditorContainer'
import { useCallback, useEffect, useState } from 'react'
import NavBar from './src/components/NavBar'

export default function App() {
  const [startInspect, setStartInspect] = useState(false)
  const handleClick = useCallback(() => setStartInspect(true), [startInspect])

  return (
    <>
      <root.div>
        <ChakraProvider theme={theme}>
          <NavBar onInspect={handleClick} />
        </ChakraProvider>
      </root.div>
      <EditorContainer shouldStartInspect={startInspect} />
    </>
  )
}
