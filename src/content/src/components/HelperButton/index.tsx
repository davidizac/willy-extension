import { ArrowBackIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { useRecoilState } from 'recoil'
import { editingState } from '../../atoms/editing.state'

export default function HelperButton() {
  const ref = useRef(null)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [, setEditing] = useRecoilState(editingState)

  const goBackWithoutSaving = () => {
    setEditing(false)
    onClose()
  }

  return (
    <>
      <Box
        pos={'absolute'}
        margin='auto'
        top={'30px'}
        zIndex='4444'
        left={'45%'}
        display='flex'
        justifyContent={'center'}
        alignItems={'center'}
        height={'42px'}
        px={'20px'}
        borderRadius='20px'
        bg={'white'}
        columnGap='20px'
      >
        <Box display='flex' justifyContent={'center'} alignItems={'center'} cursor={'pointer'}>
          <Button variant={'outline'} onClick={onOpen}>
            <ArrowBackIcon marginRight={'5px'} />
            Back
          </Button>
        </Box>
        <Box display='flex' justifyContent={'center'} alignItems={'center'} cursor={'pointer'}>
          <Button variant={'primary'}>Save</Button>
        </Box>
        <Box className='sidebar-container' ref={ref}></Box>
        <Modal portalProps={{ containerRef: ref }} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Unsaved Changes</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Are you sure you want to go back ? All changes will be discarded</Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={goBackWithoutSaving}>
                Yes
              </Button>
              <Button variant='ghost' onClick={onClose}>
                No
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  )
}
