import { ChakraProvider } from '@chakra-ui/react'
import root from 'react-shadow/emotion'
import root2 from 'react-shadow/styled-components'

import { theme } from './src/theme/chakra-theme'
import EditorContainer from './src/components/EditorContainer'
import { useCallback, useState } from 'react'
import NavBar from './src/components/NavBar'
import { AnimationsStyle } from './src/theme/editor-theme'

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
      <root2.div className='willy-editor'>
        <AnimationsStyle />
        <EditorContainer shouldStartInspect={startInspect} />
      </root2.div>
    </>
  )
}
