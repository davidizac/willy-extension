import { Box, Text } from '@chakra-ui/react'
import { useInspector } from './components/Inspector'

export default function WillyContainer() {
  const { startInspect, stopInspect } = useInspector()
  startInspect()
  return (
    <div id='willy-container'>
      <h1></h1>
    </div>
  )
}
