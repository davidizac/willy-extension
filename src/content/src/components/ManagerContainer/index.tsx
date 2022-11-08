import { Box } from '@chakra-ui/react'
import NavBar from '../NavBar'
import SideBarModal from '../SideBar'
import { useRef } from 'react'
import HelperButton from '../HelperButton'
import { useRecoilValue } from 'recoil'
import { editorState } from '../../atoms/editor.state'

export default function ManagerContainer() {
  const ref = useRef(null)
  const isEditorOpen = useRecoilValue(editorState)

  return (
    <Box>
      {isEditorOpen && <HelperButton />}
      <NavBar />
      <SideBarModal containerRef={ref} />
      <Box className='sidebar-container' ref={ref}></Box>
    </Box>
  )
}
