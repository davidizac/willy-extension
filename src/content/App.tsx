import { ChakraProvider } from '@chakra-ui/react'
import ManagerRoot from 'react-shadow/emotion'
import EditorRoot from 'react-shadow/styled-components'
import { theme } from './src/theme/chakra-theme'
import EditorContainer from './src/components/EditorContainer'
import { GlobalCSSForEditor, GlobalCSSForChakra } from './src/theme/global'
import ManagerContainer from './src/components/ManagerContainer'
import { RecoilRoot } from 'recoil'
import RecoilNexus from 'recoil-nexus'

export default function App() {
  return (
    <RecoilRoot>
      <RecoilNexus />
      <ManagerRoot.div>
        <ChakraProvider theme={theme}>
          <GlobalCSSForChakra />
          <ManagerContainer />
        </ChakraProvider>
      </ManagerRoot.div>
      <EditorRoot.div>
        <GlobalCSSForEditor />
        <EditorContainer />
      </EditorRoot.div>
    </RecoilRoot>
  )
}
