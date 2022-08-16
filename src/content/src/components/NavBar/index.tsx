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
  Heading,
  Spacer,
} from '@chakra-ui/react'

import { ChevronRightIcon, AddIcon } from '@chakra-ui/icons'

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

export default function NavBar({ onInspect }) {
  const AddButton = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200')
    const linkHoverColor = useColorModeValue('gray.800', 'white')
    const popoverContentBgColor = useColorModeValue('white', 'gray.800')

    return (
      <Box key={'Add'}>
        <Popover trigger={'hover'} placement={'bottom-start'}>
          <PopoverTrigger>
            <Button size='lg' colorScheme='gray' borderRadius={'50px'} p={'10px'} mt={'-65px'}>
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
        onClick={onInspect}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
      >
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={500}>
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
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    )
  }
  return (
    <Box
      pos={'fixed'}
      bottom={'0px'}
      bg={'white'}
      width={'100%'}
      zIndex={'100000000000'}
      height={'auto'}
      px={'20px'}
      py={'10px'}
    >
      <Flex minWidth='max-content' alignItems='center' gap='3'>
        <Box p='2'>
          <Heading size='md'>Willy App</Heading>
        </Box>
        <Spacer />
        <Box p='2'>
          <AddButton />
        </Box>
        <Spacer />
        <ButtonGroup gap='2'>
          <Button variant='primary'>Sign Up</Button>
          <Button variant='secondary'>Log in</Button>
        </ButtonGroup>
      </Flex>
    </Box>
  )
}
