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
  StackDivider,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { ColorPicker, useColor } from 'react-color-palette'
import ReactColorPaletteCss from '!raw-loader!react-color-palette/lib/css/styles.css'
import { boxSettingState } from '../../atoms/box-settings.state'
import { editingState } from '../../atoms/editing.state'

function SideBarModal({ containerRef, ...rest }) {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
  const [boxSetting, setBoxSetting] = useRecoilState(boxSettingState)
  const isEditing = useRecoilValue(editingState)

  const [drawerSide, setDrawerSide] = useState('right')
  const [elementBehavior, setElementBehavior] = useState(boxSetting.behaviorType)

  const [backgroundColor, setBackgroundColor] = useColor('hex', boxSetting.backgroundColor)

  useEffect(() => {
    if (isEditing) onOpen()
    else onClose()
  }, [isEditing])

  const closeSideBar = () => {
    onClose()
  }

  const handleDrawerSide = () => {
    setDrawerSide(drawerSide === 'right' ? 'left' : 'right')
  }

  const onPlacementChange = (e) => {
    setBoxSetting((settings) => {
      return {
        ...settings,
        placement: e.target.value,
      }
    })
  }

  const onMarginChange = (isLeft, e) => {
    setBoxSetting((settings) => {
      return {
        ...settings,
        [isLeft ? 'spacingX' : 'spacingY']: e,
      }
    })
  }

  return (
    <>
      {isEditing && !isOpen && (
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
                    <Text marginBottom={'20px'}>Width</Text>
                    <Slider
                      min={20}
                      max={800}
                      step={5}
                      aria-label='slider-ex-2'
                      colorScheme='pink'
                      value={boxSetting.width}
                      onChange={(val) => {
                        setBoxSetting((setting) => {
                          return { ...setting, width: val }
                        })
                      }}
                    >
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
                        <VStack
                          spacing={6}
                          align='stretch'
                          divider={<StackDivider borderColor='gray.200' />}
                        >
                          <Flex>
                            <Box>
                              <Text>Type</Text>
                            </Box>
                            <Spacer />
                            <Box>
                              <Select
                                value={boxSetting.actionType}
                                onChange={(event) => {
                                  setBoxSetting((setting) => {
                                    return {
                                      ...setting,
                                      actionType: event.target.value,
                                    }
                                  })
                                }}
                                placeholder='Select option'
                              >
                                <option value='click'>Click</option>
                                <option value='hover'>Hover</option>
                                {/* <option value='option3'>Text Input</option>
                                <option value='option3'>Hotspot</option> */}
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
                        <VStack
                          spacing={6}
                          align='stretch'
                          divider={<StackDivider borderColor='gray.200' />}
                        >
                          <Box>
                            <Text mb={4}>Type</Text>
                            <Box>
                              <Select
                                placeholder='Select option'
                                value={elementBehavior}
                                onChange={(e) => {
                                  setElementBehavior(e.target.value)
                                }}
                              >
                                <option value='visible'>Show only when element is visible</option>
                                <option value='find'>Try to find element</option>
                              </Select>
                            </Box>
                          </Box>
                          {/* <Box>
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
                          </Box> */}
                          {/* <Box>
                            <Text color={'green'}>Selector is unique and valid</Text>
                          </Box> */}
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
                        <VStack
                          spacing={6}
                          align='stretch'
                          divider={<StackDivider borderColor='gray.200' />}
                        >
                          <Box>
                            <Select
                              value={boxSetting.placement}
                              placeholder='Select option'
                              onChange={onPlacementChange}
                            >
                              <option value='left'>Left</option>
                              <option value='bottom'>Bottom</option>
                              <option value='top'>Top</option>
                              <option value='right'>Right</option>
                            </Select>
                          </Box>
                          <Box>
                            <Box>
                              <Text>Left</Text>
                              <Slider
                                aria-label='slider-ex-2'
                                colorScheme='pink'
                                value={boxSetting.spacingX}
                                onChange={(e) => onMarginChange(true, e)}
                              >
                                <SliderTrack>
                                  <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb />
                              </Slider>
                            </Box>
                          </Box>
                          <Box>
                            <Box>
                              <Text>Top</Text>
                              <Slider
                                aria-label='slider-ex-2'
                                colorScheme='pink'
                                value={boxSetting.spacingY}
                                onChange={(e) => onMarginChange(false, e)}
                              >
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
                    {/* <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box flex='1' textAlign='left'>
                            <Text>Backdrop focus</Text>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <VStack
                          spacing={6}
                          align='stretch'
                          divider={<StackDivider borderColor='gray.200' />}
                        >
                          <Box>
                            <Box>
                              <Text>Width</Text>
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
                              <Text>Height</Text>
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
                              <Text>Corner Roundness</Text>
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
                    </AccordionItem> */}
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
                        <VStack
                          spacing={6}
                          align='stretch'
                          divider={<StackDivider borderColor='gray.200' />}
                        >
                          <Box>
                            <Text mb='20px'>Background</Text>
                            <Box>
                              <style>{ReactColorPaletteCss}</style>
                              <ColorPicker
                                width={250}
                                height={100}
                                color={backgroundColor}
                                onChange={(val) => {
                                  setBackgroundColor(val)
                                  setBoxSetting((setting) => {
                                    return { ...setting, backgroundColor: val.hex }
                                  })
                                }}
                                hideHSV
                                hideRGB
                              />
                            </Box>
                          </Box>
                          <Box>
                            <Text>Corner Roundness</Text>
                            <Slider
                              aria-label='slider-ex-2'
                              colorScheme='pink'
                              value={boxSetting.borderRadius}
                              min={0}
                              max={50}
                              step={1}
                              onChange={(val) => {
                                setBoxSetting((setting) => {
                                  return { ...setting, borderRadius: val }
                                })
                              }}
                            >
                              <SliderTrack>
                                <SliderFilledTrack />
                              </SliderTrack>
                              <SliderThumb />
                            </Slider>
                          </Box>
                          <VStack spacing={4} align='stretch'>
                            <Text>Padding</Text>
                            <Box>
                              <Text fontSize='sm'>Vertical</Text>
                              <Slider
                                aria-label='slider-ex-2'
                                colorScheme='pink'
                                value={boxSetting.paddingY}
                                min={3}
                                max={100}
                                step={1}
                                onChange={(val) => {
                                  setBoxSetting((setting) => {
                                    return { ...setting, paddingY: val }
                                  })
                                }}
                              >
                                <SliderTrack>
                                  <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb />
                              </Slider>
                            </Box>
                            <Box>
                              <Text fontSize='sm'>Horizontal</Text>
                              <Slider
                                aria-label='slider-ex-2'
                                colorScheme='pink'
                                value={boxSetting.paddingX}
                                min={3}
                                max={150}
                                step={1}
                                onChange={(val) => {
                                  setBoxSetting((setting) => {
                                    return { ...setting, paddingX: val }
                                  })
                                }}
                              >
                                <SliderTrack>
                                  <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb />
                              </Slider>
                            </Box>
                          </VStack>
                          {
                            // TODO: add other functionality
                            /* <Flex>
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
                            <Text>Shadow Width</Text>
                            <Slider aria-label='slider-ex-2' colorScheme='pink' defaultValue={30}>
                              <SliderTrack>
                                <SliderFilledTrack />
                              </SliderTrack>
                              <SliderThumb />
                            </Slider>
                          </Box>
                          <Box>
                            <Text>Shadow Intensity</Text>
                            <Slider aria-label='slider-ex-2' colorScheme='pink' defaultValue={30}>
                              <SliderTrack>
                                <SliderFilledTrack />
                              </SliderTrack>
                              <SliderThumb />
                            </Slider>
                          </Box> */
                          }
                        </VStack>
                      </AccordionPanel>
                    </AccordionItem>
                    {/* <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box flex='1' textAlign='left'>
                            <Text>Backdrop</Text>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <VStack
                          spacing={6}
                          align='stretch'
                          divider={<StackDivider borderColor='gray.200' />}
                        >
                          <Box>
                            <Box>
                              <Text mb='20px'>Color</Text>
                            </Box>
                            <Spacer />
                            <Box>
                              <style>{ReactColorPaletteCss}</style>
                              <ColorPicker
                                width={250}
                                height={100}
                                color={color}
                                onChange={setColor}
                                hideHSV
                                hideRGB
                              />
                            </Box>
                          </Box>
                          <Box>
                            <Text>Opacity</Text>
                            <Slider aria-label='slider-ex-2' colorScheme='pink' defaultValue={30}>
                              <SliderTrack>
                                <SliderFilledTrack />
                              </SliderTrack>
                              <SliderThumb />
                            </Slider>
                          </Box>
                        </VStack>
                      </AccordionPanel>
                    </AccordionItem> */}
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
