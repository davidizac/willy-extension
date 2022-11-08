import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Stack,
  Box,
  Select,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Tabs,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Slider,
  SliderTrack,
  Checkbox,
  SliderThumb,
  SliderFilledTrack,
  RadioGroup,
  Radio,
  VStack,
  Flex,
  Spacer,
  Switch,
  Center,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { editorState } from '../../atoms/editor.state'

function SideBarModal({ containerRef, ...rest }) {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
  const isEditorOpen = useRecoilValue(editorState)
  const [drawerSide, setDrawerSide] = useState('right')
  useEffect(() => {
    if (isEditorOpen) onOpen()
    else onClose()
  }, [isEditorOpen])

  const closeSideBar = () => {
    onClose()
  }

  const handleDrawerSide = () => {
    setDrawerSide(drawerSide === 'right' ? 'left' : 'right')
  }

  return (
    <>
      {isEditorOpen && !isOpen && (
        <Button
          variant={'outline'}
          position='absolute'
          top={'30px'}
          right={drawerSide == 'right' ? '0' : ''}
          left={drawerSide == 'right' ? '' : '0'}
          zIndex={10000}
          borderRadius={'4px'}
          height={'120px'}
          p={0}
          m={0}
          onClick={onToggle}
        >
          <Box justifyContent={'center'} alignItems={'center'}>
            {drawerSide == 'right' ? (
              <ChevronLeftIcon boxSize={'7'} />
            ) : (
              <ChevronRightIcon boxSize={'7'} />
            )}
            <Text
              style={{ letterSpacing: '1.1px', writingMode: 'vertical-lr', marginTop: '3px' }}
              fontSize='lg'
            >
              Settings
            </Text>
          </Box>
        </Button>
      )}
      <Drawer
        variant='alwaysOpen'
        {...rest}
        isOpen={isOpen}
        placement={drawerSide}
        size={'md'}
        onClose={closeSideBar}
        trapFocus={false}
        closeOnOverlayClick={false}
        blockScrollOnMount={false}
        portalProps={{ containerRef }}
      >
        {/* <DrawerOverlay /> */}
        <DrawerContent>
          <DrawerCloseButton onClick={closeSideBar} />

          <DrawerHeader>Driven Action Settings</DrawerHeader>

          <DrawerBody>
            <Tabs isFitted={true} variant='enclosed'>
              <TabList>
                <Tab>Individual</Tab>
                <Tab>Group</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Box marginBottom={'20px'}>
                    <Text marginBottom={'20px'}>
                      <strong>Width</strong>
                    </Text>
                    <Slider aria-label='slider-ex-2' colorScheme='pink' defaultValue={30}>
                      <SliderTrack>
                        <SliderFilledTrack />
                      </SliderTrack>
                      <SliderThumb />
                    </Slider>
                  </Box>
                  <Accordion allowToggle>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box flex='1' textAlign='left'>
                            <Text>Action</Text>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <VStack spacing={6} align='stretch'>
                          <Flex>
                            <Box>
                              <Text>Type</Text>
                            </Box>
                            <Spacer />
                            <Box>
                              <Select placeholder='Select option'>
                                <option value='option1'>Click</option>
                                <option value='option2'>Hover</option>
                                <option value='option3'>Text Input</option>
                                <option value='option3'>Hotspot</option>
                              </Select>
                            </Box>
                          </Flex>
                        </VStack>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box flex='1' textAlign='left'>
                            <Text>Element</Text>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <VStack spacing={6} align='stretch'>
                          <Box>
                            <Checkbox>Continue flow if element does not exist</Checkbox>
                          </Box>
                          <Box>
                            <RadioGroup defaultValue='auto'>
                              <Stack spacing={5} direction='row'>
                                <Radio colorScheme='red' value='auto'>
                                  Auto
                                </Radio>
                                <Radio colorScheme='green' value='manual'>
                                  Manual
                                </Radio>
                              </Stack>
                            </RadioGroup>
                          </Box>
                          <Box>
                            <Text color={'green'}>Selector is unique and valid</Text>
                          </Box>
                        </VStack>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box flex='1' textAlign='left'>
                            <Text>Placement</Text>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <VStack spacing={6} align='stretch'>
                          <Box>
                            <Select placeholder='Select option'>
                              <option value='option1'>Left</option>
                              <option value='option2'>Bottom</option>
                              <option value='option3'>Top</option>
                              <option value='option3'>Right</option>
                            </Select>
                          </Box>
                          <Box>
                            <Box>
                              <Text>
                                <strong>Left</strong>
                              </Text>
                              <Slider aria-label='slider-ex-2' colorScheme='pink' defaultValue={30}>
                                <SliderTrack>
                                  <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb />
                              </Slider>
                            </Box>
                          </Box>
                          <Box>
                            <Box>
                              <Text>
                                <strong>Top</strong>
                              </Text>
                              <Slider aria-label='slider-ex-2' colorScheme='pink' defaultValue={30}>
                                <SliderTrack>
                                  <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb />
                              </Slider>
                            </Box>
                          </Box>
                        </VStack>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box flex='1' textAlign='left'>
                            <Text>Backdrop focus</Text>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <VStack spacing={6} align='stretch'>
                          <Box>
                            <Box>
                              <Text>
                                <strong>Width</strong>
                              </Text>
                              <Slider aria-label='slider-ex-2' colorScheme='pink' defaultValue={30}>
                                <SliderTrack>
                                  <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb />
                              </Slider>
                            </Box>
                          </Box>
                          <Box>
                            <Box>
                              <Text>
                                <strong>Height</strong>
                              </Text>
                              <Slider aria-label='slider-ex-2' colorScheme='pink' defaultValue={30}>
                                <SliderTrack>
                                  <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb />
                              </Slider>
                            </Box>
                          </Box>
                          <Box>
                            <Box>
                              <Text>
                                <strong>Corner Roundness</strong>
                              </Text>
                              <Slider aria-label='slider-ex-2' colorScheme='pink' defaultValue={30}>
                                <SliderTrack>
                                  <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb />
                              </Slider>
                            </Box>
                          </Box>
                        </VStack>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </TabPanel>
                <TabPanel>
                  <Accordion size='xl' allowToggle>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box flex='1' textAlign='left'>
                            <Text>Box</Text>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <VStack spacing={6} align='stretch'>
                          <Box>
                            <Text>
                              <strong>Corner Roundness</strong>
                            </Text>
                            <Slider aria-label='slider-ex-2' colorScheme='pink' defaultValue={30}>
                              <SliderTrack>
                                <SliderFilledTrack />
                              </SliderTrack>
                              <SliderThumb />
                            </Slider>
                          </Box>
                          <Flex>
                            <Box>
                              <Text>Box Border</Text>
                            </Box>
                            <Spacer />
                            <Box>
                              <Switch size='md' />
                            </Box>
                          </Flex>
                          <Flex>
                            <Box>
                              <Text>Type</Text>
                            </Box>
                            <Spacer />
                            <Box>
                              <Select placeholder='Select option'>
                                <option value='option1'>Shadow</option>
                                <option value='option2'>Solid</option>
                              </Select>
                            </Box>
                          </Flex>
                          <Box>
                            <Text>
                              <strong>Shadow Width</strong>
                            </Text>
                            <Slider aria-label='slider-ex-2' colorScheme='pink' defaultValue={30}>
                              <SliderTrack>
                                <SliderFilledTrack />
                              </SliderTrack>
                              <SliderThumb />
                            </Slider>
                          </Box>
                          <Box>
                            <Text>
                              <strong>Shadow Intensity</strong>
                            </Text>
                            <Slider aria-label='slider-ex-2' colorScheme='pink' defaultValue={30}>
                              <SliderTrack>
                                <SliderFilledTrack />
                              </SliderTrack>
                              <SliderThumb />
                            </Slider>
                          </Box>
                        </VStack>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box flex='1' textAlign='left'>
                            <Text>Backdrop</Text>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <VStack spacing={6} align='stretch'>
                          <Flex>
                            <Box>
                              <Text>Color</Text>
                            </Box>
                            <Spacer />
                            <Box>
                              <Select placeholder='Select option'>
                                <option value='option1'>Click</option>
                                <option value='option2'>Hover</option>
                                <option value='option3'>Text Input</option>
                                <option value='option3'>Hotspot</option>
                              </Select>
                            </Box>
                          </Flex>
                          <Box>
                            <Text>
                              <strong>Opacity</strong>
                            </Text>
                            <Slider aria-label='slider-ex-2' colorScheme='pink' defaultValue={30}>
                              <SliderTrack>
                                <SliderFilledTrack />
                              </SliderTrack>
                              <SliderThumb />
                            </Slider>
                          </Box>
                        </VStack>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </DrawerBody>

          <DrawerFooter justifyContent={drawerSide == 'right' ? 'flex-start' : 'flex-end'}>
            <Button onClick={handleDrawerSide}>
              {drawerSide == 'right' ? (
                <>
                  <ChevronLeftIcon boxSize={9} />
                  <Text>Move to left</Text>
                </>
              ) : (
                <>
                  <Text>Move to right</Text>
                  <ChevronRightIcon boxSize={9} />
                </>
              )}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SideBarModal
