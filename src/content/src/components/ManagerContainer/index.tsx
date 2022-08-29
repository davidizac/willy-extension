import { Box } from '@chakra-ui/react'
import NavBar from '../NavBar'
import SideBarModal from '../SideBar'
import { useRef } from 'react'
import HelperButton from '../HelperButton'

export default function ManagerContainer() {
  const ref = useRef(null)

  return (
    <Box>
      <HelperButton />
      <NavBar />
      <SideBarModal containerRef={ref} />
      <Box className='sidebar-container' ref={ref}></Box>
    </Box>
  )
}
