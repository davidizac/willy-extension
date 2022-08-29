import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { focusingState } from '../../atoms/focus.state'
import { sideBarState } from '../../atoms/sidebar.state'

function SideBarModal({ containerRef, ...rest }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isSideBarOpen = useRecoilValue(sideBarState)
  const [, setSideBarOpen] = useRecoilState(sideBarState)
  const isFocusing = useRecoilValue(focusingState)

  useEffect(() => {
    if (isSideBarOpen) onOpen()
    else onClose()
  }, [isSideBarOpen])

  useEffect(() => {
    if (isFocusing) onClose()
  }, [isFocusing])

  const closeSideBar = () => {
    setSideBarOpen(false)
  }

  return (
    <Drawer
      variant='alwaysOpen'
      {...rest}
      isOpen={isOpen}
      placement='right'
      onClose={closeSideBar}
      trapFocus={false}
      closeOnOverlayClick={false}
      blockScrollOnMount={false}
      portalProps={{ containerRef }}
    >
      {/* <DrawerOverlay /> */}
      <DrawerContent>
        <DrawerCloseButton onClick={closeSideBar} />
        <DrawerHeader>Create your account</DrawerHeader>

        <DrawerBody>
          <Input placeholder='Type here...' />
        </DrawerBody>

        <DrawerFooter>
          <Button variant='outline' mr={3} onClick={closeSideBar}>
            Cancel
          </Button>
          <Button colorScheme='blue'>Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default SideBarModal
