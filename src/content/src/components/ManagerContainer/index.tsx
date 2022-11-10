import { Box } from '@chakra-ui/react'
import NavBar from '../NavBar'
import SideBarModal from '../SideBar'
import { useRef } from 'react'
import HelperButton from '../HelperButton'
import { useRecoilValue } from 'recoil'
import { editingState } from '../../atoms/editing.state'

export default function ManagerContainer() {
  const ref = useRef(null)
  const isEditing = useRecoilValue(editingState)

  return (
    <Box>
      {isEditing && <HelperButton />}
      <NavBar />
      <SideBarModal containerRef={ref} />
      <Box className='sidebar-container' ref={ref}></Box>
    </Box>
  )
}
