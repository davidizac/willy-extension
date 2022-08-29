import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  ButtonGroup,
  Slide,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react'

import { ChevronRightIcon, AddIcon } from '@chakra-ui/icons'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { inspectingState } from '../../atoms/inspect.state'
import { focusingState } from '../../atoms/focus.state'
import { sideBarState } from '../../atoms/sidebar.state'

interface NavItem {
  label: string
  description?: string
  icon?: any
  id?: number
}

const FLOW_TYPES: Array<NavItem> = [
  {
    label: 'Driven Action',
    id: 0,
    icon: <Icon as={ChevronRightIcon} />,
    description:
      'Used to focus the attention of the user on a certain element to drive action such as a click or input.',
  },
  {
    label: 'Modal',
    id: 0,
    icon: <Icon as={ChevronRightIcon} />,
    description:
      'Global announcements that are centered on the page and calls for the full attention of the user.',
  },
  {
    label: 'Tooltip',
    id: 0,
    icon: <Icon as={ChevronRightIcon} />,
    description: `Smaller, mid-sized Modals used to grab the user's attention in a less disruptive way.`,
  },
  {
    label: 'Slideout',
    id: 0,
    icon: <Icon as={ChevronRightIcon} />,
    description: `Smaller, mid-sized Modals used to grab the user's attention in a less disruptive way.`,
  },
]

export default function NavBar() {
  const { isOpen, onClose, onOpen, onToggle } = useDisclosure()
  const [, setIsInspect] = useRecoilState(inspectingState)
  const isFocusing = useRecoilValue(focusingState)
  const isSideBarOpen = useRecoilValue(sideBarState)
  const [, setSideBarOpen] = useRecoilState(sideBarState)

  useEffect(() => {
    onOpen()
  }, [])

  useEffect(() => {
    if (isSideBarOpen) onClose()
    else onOpen()
  }, [isSideBarOpen])

  useEffect(() => {
    if (isFocusing) onClose()
    else onOpen()
  }, [isFocusing])

  const handleInspectClick = () => {
    setSideBarOpen(false)
    onClose()
    setIsInspect(true)
  }

  const handleSideBarClick = () => {
    setSideBarOpen(!isSideBarOpen)
  }

  const AddButton = () => {
    const linkColor = useColorModeValue('lightCyan.600', 'lightCyan.200')
    const linkHoverColor = useColorModeValue('lightCyan.800', 'white')
    const popoverContentBgColor = useColorModeValue('white', 'lightCyan.800')

    return (
      <Box key={'Add'}>
        <Popover trigger={'hover'} placement={'bottom-start'}>
          <PopoverTrigger>
            <Button size='lg' colorScheme='lightCyan' borderRadius={'50px'} p={'10px'} mt={'-65px'}>
              <Icon as={AddIcon} />
            </Button>
          </PopoverTrigger>

          <PopoverContent
            border={0}
            boxShadow={'xl'}
            bg={popoverContentBgColor}
            p={4}
            rounded={'xl'}
            minW={'sm'}
          >
            <Stack>
              {FLOW_TYPES.map((child) => (
                <DesktopSubNav key={child.label} {...child} />
              ))}
            </Stack>
          </PopoverContent>
        </Popover>
      </Box>
    )
  }

  const DesktopSubNav = ({ label, description, id, icon }: NavItem) => {
    return (
      <Link
        onClick={handleInspectClick}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: 'lightCyan.200' }}
      >
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'lightCyan.900' }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={'sm'}>{description}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}
          >
            <Icon color={'lightCyan.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    )
  }

  return (
    <Slide direction='bottom' in={isOpen} style={{ zIndex: 100000000000 }}>
      <Box bg={'white'} width={'100%'} height={'auto'} px={'20px'} py={'10px'}>
        {!isFocusing && (
          <Button
            variant={'outline'}
            position='absolute'
            top={'-34px'}
            left={'0px'}
            py={'2px'}
            px={'10px'}
            borderRadius={'4px'}
            onClick={onToggle}
          >
            <Text fontSize='md'>{isOpen ? 'Hide' : 'Show'}</Text>
          </Button>
        )}
        <Flex minWidth='max-content' alignItems='center' gap='3'>
          <Box p='2'>
            <Text size='lg' colorScheme={'mellowApricot'}>
              Willy App
            </Text>
          </Box>
          <Spacer />
          {isOpen && (
            <Box p='2'>
              <AddButton />
            </Box>
          )}
          <Spacer />
          <ButtonGroup gap='2'>
            <Button variant='primary' onClick={handleSideBarClick}>
              <Text fontSize='md'>{isSideBarOpen ? 'Close' : 'Open'}</Text>
            </Button>
          </ButtonGroup>
        </Flex>
      </Box>
    </Slide>
  )
}
