import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import useToggle from '@react-hook/toggle'
import Slider from 'rc-slider'
import SliderCss from '!raw-loader!rc-slider/assets/index.css'
import CustomCss from '!raw-loader!./custom.css'
import {
  AlignIcon1,
  AlignIcon2,
  AlignIcon3,
  AlignIcon4,
  DeleteImageIcon,
  ImageUploaderIcon,
  LetterSpaceIcon,
  LineHeightIcon,
  ListIcon1,
  ListIcon2,
  UnifyIcon,
  UnSplashIcon,
} from '../icons'
import Picker from 'emoji-picker-react'
import EmojiCss from '!raw-loader!emoji-picker-react/dist/main.css'
import { PaletteColor } from '../components/PaletteColor'
import UnsplashReact, { Base64Uploader, withDefaultProps } from 'unsplash-react'

const WillyPopup = styled.div`
  position: absolute !important;
  z-index: 9999;
  animation: popup-animation 0.3s ease-in-out;
  transform: translateZ(0);
  border-radius: 5px;
  text-align: left;
  cursor: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 350px;
  transition: top 0.3s linear;
  background-color: white;
  box-shadow: 0px 1px 4px rgb(0 0 0 / 25%);
  & * {
    color: #495057;
    font-weight: 600;
    font-size: 12px;
  }
`

const FlexSpaceBetween = styled.div`
  display: flex;
  column-gap: 40px;
  position: relative;
  justify-content: space-between;
  align-items: center;
`

const PopupTitle = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: #212429;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding: 10px 18px;
  font-weight: 600;
  font-size: 12px;
  color: #495057;
`

const ValueContainer = styled.div`
  background: white;
  border: 1px solid #dde2e5;
  padding: 10px 13px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 12px;
  display: flex;
  align-items: center;
  padding: 8px 13px;
  font-weight: 400;
  border-color: #dde2e5;
  border-radius: 3px;
  background: #f8f9f9;
  column-gap: 15px;
`

const SelectDiv = styled(ValueContainer)`
  &:after {
    content: '';
    background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%3Cpath%20d%3D%22M1.41%200L6%204.58L10.59%200L12%201.41L6%207.41L0%201.41L1.41%200Z%22%20fill%3D%22%23C2CBD0%22/%3E%0A%3C/svg%3E);
    width: 12px;
    height: 8px;
  }
`
const Key = styled.div`
  margin-bottom: 10px;
`

const Input = styled.input`
  padding: 8px 13px;
  outline: 0 !important;
  background: transparent;
  border: 1px solid #dde2e5;
`

const PopupToolbarContainer = styled.div<{
  backgroundOnHover: boolean
  overflowY: boolean
  colorOnHover: boolean
}>`
  padding: 10px 0px 10px 0px;
  overflow-y: ${(props) => (props.overflowY ? 'scroll' : 'inherit')};

  & > div {
    padding: 3px 20px;
    cursor: pointer;
  }

  & :hover {
    color: ${(props) => props.colorOnHover && '#dd5584'};
    background-color: ${(props) => props.backgroundOnHover && 'rgba(221, 85, 132, 0.1)'};
  }

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 6px;
    box-shadow: inset 7px 10px 12px #f0f0f0;
  }
  &::-webkit-scrollbar-thumb {
    background: #7a7a7a;
    border-radius: 15px;
  }
`

const MainOption = styled.div<{ marginBottom: string; padding: string }>`
  text-align: left;
  cursor: auto;
  box-sizing: border-box;
  color: #495057;
  font-weight: 600;
  font-size: 12px;
  padding: ${(props) => props.padding || '0px 18px'}!important;
  margin-bottom: ${(props) => props.marginBottom || '18px'};
  & > div:first-child {
    font-style: normal;
    font-size: 12px;
  }
  & > * {
    margin-bottom: 10px;
  }
  & > *:last-child {
    margin-bottom: 0px;
  }
`

const RawOption = styled.div`
  width: fit-content;
  padding: 0px 18px;
  white-space: nowrap;
  margin-bottom: 10px;
  cursor: pointer;
  color: #000;
  &:last-child {
    margin-bottom: 0px;
  }
  & > * {
    margin: 0px !important;
  }
  &:hover {
    color: #dd5584;
  }
`

export const HeadingPopup = ({ left }) => {
  return (
    <WillyPopup style={{ top: '60px', left }}>
      <PopupTitle>Text Type</PopupTitle>

      <PopupToolbarContainer overflowY={true}>
        <RawOption value='normal' className='raw-option hoverable-select selected'>
          <div style={{ fontSize: '17px', fontWeight: 'normal' }}>Normal</div>
        </RawOption>

        <RawOption value='h1' className='raw-option hoverable-select'>
          <h1 style={{ fontSize: '35px', fontWeight: 'bold' }}>Header 1</h1>
        </RawOption>

        <RawOption value='h2' className='raw-option hoverable-select'>
          <h2 style={{ fontSize: '25px', fontWeight: 'bold' }}>Header 2</h2>
        </RawOption>

        <RawOption value='h3' className='raw-option hoverable-select'>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Header 3</h3>
        </RawOption>
      </PopupToolbarContainer>
    </WillyPopup>
  )
}

export const FontSizePopup = ({ left }) => {
  return (
    <WillyPopup style={{ top: '60px', left }}>
      <PopupToolbarContainer backgroundOnHover={true} colorOnHover={true} overflowY={true}>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>14</div>
        <div>16</div>
        <div>18</div>
        <div>22</div>
        <div>26</div>
        <div>30</div>
        <div>34</div>
        <div>40</div>
        <div>46</div>
        <div>52</div>
        <div>60</div>
        <div>70</div>
        <div>80</div>
        <div>90</div>
      </PopupToolbarContainer>
    </WillyPopup>
  )
}

export const TypographyPopup = ({ left }) => {
  const TextValue = styled.div`
    width: calc(100% - 15px);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `
  const WillyPopupV2 = styled(WillyPopup)`
    padding: 15px 13px;
    display: flex;
    flex-direction: column;
    row-gap: 13px;
  `
  const [showInnerPopup, toggleInnerPopup] = useToggle(false, true)

  const [sliderX, setSliderX] = useState(60)

  const InnerPopup = () => {
    return (
      <WillyPopupV2>
        <div onClick={toggleInnerPopup}>Mixed</div>
        <div onClick={toggleInnerPopup}>Lowercase</div>
        <div onClick={toggleInnerPopup}>Uppercase</div>
      </WillyPopupV2>
    )
  }

  const IconWrapper = styled.div`
    text-align: left;
    cursor: auto;
    font-style: normal;
    box-sizing: border-box;
    display: flex !important;
    justify-content: center;
    align-items: center;
    padding: 7px 5px;
    min-width: 30px;
    font-weight: 600;
    font-size: 12px;
    border-right: 1px solid;
    color: #acb5bd;
    border-color: #dde2e5;
  `

  return (
    <WillyPopup style={{ top: '60px', left }}>
      <style>{SliderCss}</style>
      <style>{CustomCss}</style>
      <PopupTitle>Typography</PopupTitle>
      <PopupToolbarContainer>
        <MainOption>
          <FlexSpaceBetween>
            <div>Case</div>
            {showInnerPopup && (
              <div style={{ position: 'absolute', right: '50%', bottom: 0 }}>
                <InnerPopup />
              </div>
            )}
            <SelectDiv onClick={toggleInnerPopup}>
              <TextValue>Mixed</TextValue>
            </SelectDiv>
          </FlexSpaceBetween>
        </MainOption>
        <MainOption>
          <FlexSpaceBetween>
            <div>Line Height</div>
            <ValueContainer style={{ padding: '3px 12px 3px 0px' }}>
              <IconWrapper>
                <LineHeightIcon />
              </IconWrapper>
              <TextValue>19</TextValue>
            </ValueContainer>
          </FlexSpaceBetween>
          <Slider />
        </MainOption>
        <MainOption>
          <FlexSpaceBetween>
            <div>Letter Space</div>
            <ValueContainer style={{ padding: '3px 12px 3px 0px' }}>
              <IconWrapper>
                <LetterSpaceIcon />
              </IconWrapper>
              <TextValue>19</TextValue>
            </ValueContainer>
          </FlexSpaceBetween>
          <Slider />
        </MainOption>
      </PopupToolbarContainer>
    </WillyPopup>
  )
}

export const PaletteColorPopup = ({ left }) => {
  return (
    <div style={{ position: 'absolute', left, top: '60px' }}>
      <PaletteColor />
    </div>
  )
}

export const AlignPopup = ({ left }) => {
  return (
    <WillyPopup style={{ top: '60px', left }}>
      <PopupToolbarContainer
        colorOnHover={true}
        style={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}
      >
        <div>
          <AlignIcon1 />
        </div>
        <div>
          <AlignIcon2 />
        </div>
        <div>
          <AlignIcon3 />
        </div>
        <div>
          <AlignIcon4 />
        </div>
      </PopupToolbarContainer>
    </WillyPopup>
  )
}

export const ListPopup = ({ left }) => {
  return (
    <WillyPopup style={{ top: '60px', left }}>
      <PopupToolbarContainer
        colorOnHover={true}
        style={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}
      >
        <div>
          <ListIcon1 />
        </div>
        <div>
          <ListIcon2 />
        </div>
      </PopupToolbarContainer>
    </WillyPopup>
  )
}

export const EmojiPickerPopup = ({ left }) => {
  const [chosenEmoji, setChosenEmoji] = useState(null)

  const onEmojiClick = (event, emojiObject) => {
    console.log(emojiObject)

    setChosenEmoji(emojiObject)
  }
  return (
    <WillyPopup style={{ top: '60px', left }}>
      <style type='text/css'>{EmojiCss}</style>
      <style>{CustomCss}</style>

      <Picker onEmojiClick={onEmojiClick} />
    </WillyPopup>
  )
}

export const PersonalizationPopup = ({ left }) => {
  return (
    <WillyPopup style={{ top: '60px', left }}>
      <PopupTitle>Personalization</PopupTitle>
      <PopupToolbarContainer style={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
        <MainOption>
          <Key>USER PROPERTIES</Key>
          <SelectDiv style={{ columnGap: '9px' }}>Choose an attribute</SelectDiv>
        </MainOption>
        <MainOption>
          <Key>COMPANY PROPERTIES</Key>
          <SelectDiv style={{ columnGap: '9px' }}>Choose an attribute</SelectDiv>
        </MainOption>
      </PopupToolbarContainer>
    </WillyPopup>
  )
}

export const AddLinkPopup = ({ left }) => {
  const ButtonWrapper = styled.div`
    margin-top: 10px;
  `
  const Button = styled.div`
    background-color: #dd5584;
    padding: 5px 13px;
    width: 25%;
    border-radius: 5px;
    color: white;
    display: flex;
    justify-content: center;
  `
  return (
    <WillyPopup style={{ top: '60px', left }}>
      <PopupTitle>URL link</PopupTitle>
      <PopupToolbarContainer style={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
        <MainOption marginBottom={'0px'}>
          <Key>DISPLAY TEXT</Key>
          <Input />
        </MainOption>
        <MainOption marginBottom={'0px'}>
          <Key>URL</Key>
          <Input />
        </MainOption>
        <ButtonWrapper>
          <Button>Link</Button>
        </ButtonWrapper>
      </PopupToolbarContainer>
    </WillyPopup>
  )
}

export const SpacingPopup = ({ left }) => {
  const DirectionInput = styled.div`
    display: flex;
    justify-content: flex-start;
  `
  const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 8px;
  `

  const Unify = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: #a3b0b8;
    border-radius: 0px 3px 3px 0px;
    cursor: pointer;
    transition: background 0.3s linear;
    width: 30px;
    height: 26px;
  `

  const Input = styled.input`
    background: #f8f9f9;
    border: 1px solid #ddd;
    border-radius: 2px 0 0 2px;
    padding: 9px 5px;
    width: 32px;
    height: 6px;
    text-align: center;
    outline: 0;
    border-left: none;
  `

  const InputLabel = styled.div`
    font-size: 8px;
    text-transform: uppercase;
    color: #c6c6c6;
  `
  return (
    <WillyPopup style={{ top: '60px', left }}>
      <PopupTitle>Spacing</PopupTitle>
      <PopupToolbarContainer style={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
        <MainOption marginBottom={'0px'}>
          <DirectionInput className='direction-inputs' id='section-padding'>
            <InputWrapper>
              <Input value={19} type='number' max={100} min={0} direction='top' />
              <InputLabel>Top</InputLabel>
            </InputWrapper>
            <InputWrapper>
              <Input value={19} type='number' max={100} min={0} direction='right' />
              <InputLabel>Right</InputLabel>
            </InputWrapper>
            <InputWrapper>
              <Input value={19} type='number' max={100} min={0} direction='bottom' />
              <InputLabel>Bottom</InputLabel>
            </InputWrapper>
            <InputWrapper>
              <Input value={19} type='number' max={100} min={0} direction='left' />
              <InputLabel>Left</InputLabel>
            </InputWrapper>
            <Unify>
              <UnifyIcon />
            </Unify>
          </DirectionInput>
        </MainOption>
      </PopupToolbarContainer>
    </WillyPopup>
  )
}

export const BackgroundPopup = ({ left }) => {
  const TabSwitch = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
    justify-content: center;
    border-bottom: 1px solid rgba(163, 176, 184, 0.19);
  `

  const TabSwithDiv = styled.div<{ active: boolean }>`
    text-align: center;
    width: 50%;
    font-weight: 600;
    font-size: 12px
    text-transform: uppercase;
    color: rgb(163, 176, 184);
    cursor: pointer;
    padding: 0px 6px 11px;
    margin-bottom: -1px;
    color: #3D4A52;
    ${(props) => (props.active ? 'border-bottom: 1px solid #DD5584;' : '')}
  `

  const TABS = {
    COLOR: 'color',
    IMAGES: 'images',
    UNSPLASH: 'unspash',
  }
  const [active, setActive] = useState(TABS.COLOR)
  return (
    <WillyPopup style={{ top: '60px', left }}>
      <PopupTitle>Background</PopupTitle>
      <PopupToolbarContainer
        style={{ display: 'flex', flexDirection: 'column', rowGap: '10px', paddingBottom: 0 }}
      >
        <TabSwitch>
          <TabSwithDiv onClick={() => setActive(TABS.COLOR)} active={active == TABS.COLOR}>
            Color
          </TabSwithDiv>
          <TabSwithDiv onClick={() => setActive(TABS.IMAGES)} active={active == TABS.IMAGES}>
            Images
          </TabSwithDiv>
          <TabSwithDiv onClick={() => setActive(TABS.UNSPLASH)} active={active == TABS.UNSPLASH}>
            <UnSplashIcon />
          </TabSwithDiv>
        </TabSwitch>
        {active == TABS.COLOR && (
          <MainOption marginBottom={'0px'} padding={'0px'}>
            <PaletteColor />
          </MainOption>
        )}
        {active == TABS.IMAGES && (
          <MainOption marginBottom={'0px'} padding={'0px'}>
            <div tab-value='images' style={{}}>
              <div className='image-upload-container'>
                <div className='main-option'>
                  <div className='image-drop-upload'>
                    <div id='delete-image-icon'>
                      <DeleteImageIcon />
                    </div>
                    <input type='file' accept='image/*' />
                    <div className='flex-space-5'>
                      <div>
                        <ImageUploaderIcon />
                      </div>
                      <div className='dark-text'>Click or Drop to Upload Image</div>
                    </div>
                    <div className='flex-center'>Recommended Size &lt; 30MB</div>
                  </div>
                </div>
                <div className='text-divider'>or</div>
                <div className='main-option'>
                  <div>Insert URL from the web</div>
                  <div className='image-validator'>
                    <input id='add-image-url' className='userpilot-input' type='text' />
                  </div>
                </div>
              </div>
            </div>
          </MainOption>
        )}
        {active == TABS.UNSPLASH && (
          <MainOption marginBottom={'0px'} padding={'0px'} style={{ height: '248px' }}>
            <UnsplashReact
              accessKey={'_qJoc2Mnp9jh4RWuWBBNjCPNQNqZWD8wsSi4EprP3G4'}
              Uploader={withDefaultProps(Base64Uploader, { name: 'event[logo]' })}
            />
          </MainOption>
        )}
      </PopupToolbarContainer>
    </WillyPopup>
  )
}
