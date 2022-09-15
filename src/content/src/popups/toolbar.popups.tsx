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

const Input = styled.input`
appearance: none;
width: 100%;
background: white;
outline: 0;
color: #667C89
border: 1px solid #DDE2E5;
border-radius: 3px;
padding: 10px 13px;
transition: border-color 0.3s linear;
text-overflow: ellipsis;
height: 45px;
`
const WillyPopup = styled.div<{ borderRadius: string }>`
  animation: popup-animation 0.3s ease-in-out;
  transform: translateZ(0);
  border-radius: ${(props) => props.borderRadius || '5px'};
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

const FlexSpace5 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column-gap: 5px;
`

const FlexCenter = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
`
const PopupTitle = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: #212429;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding: 10px 18px;
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
    width: 17px;
    height: 8px;
  }
`
const SelectDiv2 = styled(SelectDiv)`
  &:after {
    width: 12px;
  }
`
const Key = styled.div`
  margin-bottom: 10px;
`
const ColorOnHover = styled.div<{ active: boolean }>`
  cursor: ${(props) => (props.active ? 'inherit' : 'pointer')}!important;
  opacity: ${(props) => (props.active ? 1 : 0.7)};
  & svg * {
    fill: ${(props) => (props.active ? 'black' : 'inherit')}!important;
  }
  &:hover {
    & svg * {
      fill: ${(props) => (props.active ? 'black' : '#dd5584')}!important;
    }
    background-color: ${(props) => (!props.active ? 'rgba(221, 85, 132, 0.1)' : 'white')};
    color: ${(props) => (props.active ? 'black' : '#dd5584')}!important;
    opacity: 1;
  }
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
  padding: ${(props) => props.padding || '0px 18px'}!important;
  margin-bottom: ${(props) => props.marginBottom || '18px'};
  & > div:first-child {
    font-style: normal;
    font-size: 12px;
  }
  & > * {
    margin-bottom: 10px;
  }
  &:last-child {
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

const ButtonWrapper = styled.div`
  margin-top: 10px;
`
const InputLink = styled(Input)`
  padding: 8px 13px;
  background: transparent;
  border: 1px solid #dde2e5;
  height: auto;
  width: 84%;
  margin-bottom: 0px;
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

const TextValue = styled.div`
  width: calc(100% - 15px);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
const WillyPopupV2 = styled(WillyPopup)`
  padding: 15px 0px;
  display: flex;
  flex-direction: column;
  row-gap: 13px;
  width: 100px;
  & div {
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

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
  border-right: 1px solid;
  color: #acb5bd;
  border-color: #dde2e5;
`

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

const SpacingInput = styled(Input)`
  background: #f8f9f9;
  border: 1px solid #ddd;
  border-radius: 2px 0 0 2px;
  padding: 9px 5px;
  width: 32px;
  height: 6px;
  text-align: center;
  border-left: none;
`

const InputLabel = styled.div`
  font-size: 8px;
  text-transform: uppercase;
  color: #c6c6c6;
`

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
  text-transform: uppercase;
  color: rgb(163, 176, 184);
  cursor: pointer;
  padding: 0px 6px 11px;
  margin-bottom: -1px;
  color: #3d4a52;
  ${(props) => (props.active ? 'border-bottom: 1px solid #DD5584;' : '')}
`
const ImageDropUpload = styled.div`
  position: relative;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px dashed #acb5bd;
  background: #f5f5f5;
  cursor: pointer;
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    background: rgba(221, 85, 132, 0.2);
    border-color: #dd5584;
    background-size: auto 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
`

const DeleteImageDiv = styled.div`
  position: absolute;
  display: none;
  top: 5px;
  right: 5px;
  opacity: 0;
`

const TextDivider = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`
const ImageValidator = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: start;
  align-items: start;
`
const ImageInput = styled(Input)`
  padding: 8px 13px;
  height: auto;
  width: 90%;
  background: transparent;
  border: 1px solid #dde2e5;
`

export const HeadingPopup = () => {
  const handleClick = (e) => {
    handleStyleChanged(e.target.value)
  }
  return (
    <WillyPopup>
      <PopupTitle>Text Type</PopupTitle>

      <PopupToolbarContainer colorOnHover={true}>
        <RawOption
          onClick={handleClick}
          value='normal'
          className='raw-option hoverable-select selected'
        >
          <div style={{ fontSize: '17px', fontWeight: 'normal' }}>Normal</div>
        </RawOption>

        <RawOption onClick={handleClick} value='h1' className='raw-option hoverable-select'>
          <h1 style={{ fontSize: '35px', fontWeight: 'bold' }}>Header 1</h1>
        </RawOption>

        <RawOption onClick={handleClick} value='h2' className='raw-option hoverable-select'>
          <h2 style={{ fontSize: '25px', fontWeight: 'bold' }}>Header 2</h2>
        </RawOption>

        <RawOption onClick={handleClick} value='h3' className='raw-option hoverable-select'>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Header 3</h3>
        </RawOption>
      </PopupToolbarContainer>
    </WillyPopup>
  )
}

export const FontSizePopup = () => {
  const [active, setActive] = useState(12)
  const handleClick = (e) => {
    setActive(e.target.innerText)
    handleStyleChanged(e.target.innerText)
  }
  return (
    <WillyPopup>
      <PopupToolbarContainer backgroundOnHover={true} colorOnHover={true} overflowY={true}>
        <ColorOnHover active={active == 8} onClick={handleClick}>
          8
        </ColorOnHover>
        <ColorOnHover active={active == 9} onClick={handleClick}>
          9
        </ColorOnHover>
        <ColorOnHover active={active == 10} onClick={handleClick}>
          10
        </ColorOnHover>
        <ColorOnHover active={active == 11} onClick={handleClick}>
          11
        </ColorOnHover>
        <ColorOnHover active={active == 12} onClick={handleClick}>
          12
        </ColorOnHover>
        <ColorOnHover active={active == 14} onClick={handleClick}>
          14
        </ColorOnHover>
        <ColorOnHover active={active == 16} onClick={handleClick}>
          16
        </ColorOnHover>
        <ColorOnHover active={active == 18} onClick={handleClick}>
          18
        </ColorOnHover>
        <ColorOnHover active={active == 22} onClick={handleClick}>
          22
        </ColorOnHover>
        <ColorOnHover active={active == 26} onClick={handleClick}>
          26
        </ColorOnHover>
        <ColorOnHover active={active == 30} onClick={handleClick}>
          30
        </ColorOnHover>
        <ColorOnHover active={active == 34} onClick={handleClick}>
          34
        </ColorOnHover>
        <ColorOnHover active={active == 40} onClick={handleClick}>
          40
        </ColorOnHover>
        <ColorOnHover active={active == 46} onClick={handleClick}>
          46
        </ColorOnHover>
        <ColorOnHover active={active == 52} onClick={handleClick}>
          52
        </ColorOnHover>
        <ColorOnHover active={active == 60} onClick={handleClick}>
          60
        </ColorOnHover>
        <ColorOnHover active={active == 70} onClick={handleClick}>
          70
        </ColorOnHover>
        <ColorOnHover active={active == 80} onClick={handleClick}>
          80
        </ColorOnHover>
        <ColorOnHover active={active == 90} onClick={handleClick}>
          90
        </ColorOnHover>
      </PopupToolbarContainer>
    </WillyPopup>
  )
}

export const TypographyPopup = ({ typographyValues }) => {
  const [showInnerPopup, setShowPopup] = useState(false)
  const [activeCase, setActiveCase] = useState(typographyValues.CASE)

  const [value, setValue] = useState({
    case: activeCase,
    lineheight: typographyValues.LINE_HEIGHT,
    letterspace: typographyValues.LETTER_SPACE,
  })

  const handleLetterSpaceChange = (e) => {
    setValue((value) => {
      return {
        ...value,
        letterspace: e,
      }
    })
  }

  const handleLineHeightChange = (e) => {
    setValue((value) => {
      return {
        ...value,
        lineheight: e,
      }
    })
  }

  const handleCaseChange = (e) => {
    setActiveCase(e.target.innerText)
    setValue((value) => {
      return {
        ...value,
        case: e.target.innerText,
      }
    })
    setShowPopup(false)
  }

  const InnerPopup = () => {
    return (
      <WillyPopupV2>
        <ColorOnHover active={activeCase === 'Mixed'} onClick={handleCaseChange}>
          Mixed
        </ColorOnHover>
        <ColorOnHover active={activeCase === 'Lowercase'} onClick={handleCaseChange}>
          Lowercase
        </ColorOnHover>
        <ColorOnHover active={activeCase === 'Uppercase'} onClick={handleCaseChange}>
          Uppercase
        </ColorOnHover>
      </WillyPopupV2>
    )
  }

  return (
    <WillyPopup style={{ width: '230px' }}>
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
            <div onClick={() => setShowPopup((showPopup) => !showPopup)}>
              <SelectDiv style={{ zIndex: '-1' }}>
                <TextValue>{value.case}</TextValue>
              </SelectDiv>
            </div>
          </FlexSpaceBetween>
        </MainOption>
        <MainOption>
          <FlexSpaceBetween>
            <div>Line Height</div>
            <ValueContainer style={{ padding: '3px 12px 3px 0px', width: '75px' }}>
              <IconWrapper>
                <LineHeightIcon />
              </IconWrapper>
              <TextValue>{value.lineheight}</TextValue>
            </ValueContainer>
          </FlexSpaceBetween>
          <Slider
            step={1}
            min={1}
            max={50}
            value={value.lineheight}
            onChange={handleLineHeightChange}
          />
        </MainOption>
        <MainOption>
          <FlexSpaceBetween>
            <div>Letter Space</div>
            <ValueContainer style={{ padding: '3px 12px 3px 0px', width: '75px' }}>
              <IconWrapper>
                <LetterSpaceIcon />
              </IconWrapper>
              <TextValue>{value.letterspace}</TextValue>
            </ValueContainer>
          </FlexSpaceBetween>
          <Slider
            step={1}
            min={1}
            max={10}
            value={value.letterspace}
            onChange={handleLetterSpaceChange}
          />
        </MainOption>
      </PopupToolbarContainer>
    </WillyPopup>
  )
}

export const PaletteColorPopup = () => {
  const handlePaletteColorChange = (e) => {
    console.log(e)
  }
  return (
    <WillyPopup borderRadius={'10px'}>
      <PaletteColor width={247} handlePaletteColorChange={handlePaletteColorChange} />
    </WillyPopup>
  )
}

export const AlignPopup = () => {
  const [active, setActive] = useState('left')
  const handleClick = (value) => {
    setActive(value)
  }
  return (
    <WillyPopup>
      <PopupToolbarContainer
        colorOnHover={true}
        style={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}
      >
        <ColorOnHover active={active == 'left'} onClick={() => handleClick('left')}>
          <AlignIcon1 />
        </ColorOnHover>
        <ColorOnHover active={active == 'right'} onClick={() => handleClick('right')}>
          <AlignIcon2 />
        </ColorOnHover>
        <ColorOnHover active={active == 'center'} onClick={() => handleClick('center')}>
          <AlignIcon3 />
        </ColorOnHover>
        <ColorOnHover active={active == 'justify'} onClick={() => handleClick('justify')}>
          <AlignIcon4 />
        </ColorOnHover>
      </PopupToolbarContainer>
    </WillyPopup>
  )
}

export const ListPopup = () => {
  const [active, setActive] = useState('disc')
  const handleClick = (value) => {
    setActive(value)
  }
  return (
    <WillyPopup>
      <PopupToolbarContainer
        colorOnHover={true}
        style={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}
      >
        <ColorOnHover onClick={() => handleClick('disc')} active={active == 'disc'}>
          <ListIcon1 />
        </ColorOnHover>
        <ColorOnHover onClick={() => handleClick('numbers')} active={active == 'numbers'}>
          <ListIcon2 />
        </ColorOnHover>
      </PopupToolbarContainer>
    </WillyPopup>
  )
}

export const EmojiPickerPopup = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null)

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject)
  }
  return (
    <WillyPopup>
      <style type='text/css'>{EmojiCss}</style>
      <style>{CustomCss}</style>

      <Picker onEmojiClick={onEmojiClick} />
    </WillyPopup>
  )
}

export const PersonalizationPopup = () => {
  return (
    <WillyPopup>
      <PopupTitle>Personalization</PopupTitle>
      <PopupToolbarContainer style={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
        <MainOption>
          <Key>USER PROPERTIES</Key>
          <SelectDiv2 style={{ columnGap: '9px' }}>Choose an attribute</SelectDiv2>
        </MainOption>
        <MainOption>
          <Key>COMPANY PROPERTIES</Key>
          <SelectDiv2 style={{ columnGap: '9px' }}>Choose an attribute</SelectDiv2>
        </MainOption>
      </PopupToolbarContainer>
    </WillyPopup>
  )
}

export const AddLinkPopup = () => {
  return (
    <WillyPopup style={{ width: '300px' }}>
      <PopupTitle>URL link</PopupTitle>
      <PopupToolbarContainer
        style={{ display: 'flex', flexDirection: 'column', rowGap: '10px', padding: '10px 16px' }}
      >
        <MainOption marginBottom={'0px'}>
          <Key>DISPLAY TEXT</Key>
          <InputLink />
        </MainOption>
        <MainOption marginBottom={'0px'}>
          <Key>URL</Key>
          <InputLink />
        </MainOption>
        <ButtonWrapper>
          <Button>Link</Button>
        </ButtonWrapper>
      </PopupToolbarContainer>
    </WillyPopup>
  )
}

export const SpacingPopup = () => {
  const [value, setValue] = useState({
    top: 19,
    bottom: 19,
    right: 19,
    left: 19,
  })

  const handleChange = (e) => {
    setValue((value) => {
      return {
        ...value,
        [e.target.getAttribute('direction')]: e.target.value,
      }
    })
  }
  return (
    <WillyPopup>
      <PopupTitle>Spacing</PopupTitle>
      <PopupToolbarContainer style={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
        <MainOption marginBottom={'0px'}>
          <DirectionInput className='direction-inputs' id='section-padding'>
            <InputWrapper>
              <SpacingInput
                onChange={handleChange}
                value={value.top}
                type='number'
                max={100}
                min={0}
                direction='top'
              />
              <InputLabel>Top</InputLabel>
            </InputWrapper>
            <InputWrapper>
              <SpacingInput
                onChange={handleChange}
                value={value.right}
                type='number'
                max={100}
                min={0}
                direction='right'
              />
              <InputLabel>Right</InputLabel>
            </InputWrapper>
            <InputWrapper>
              <SpacingInput
                onChange={handleChange}
                value={value.bottom}
                type='number'
                max={100}
                min={0}
                direction='bottom'
              />
              <InputLabel>Bottom</InputLabel>
            </InputWrapper>
            <InputWrapper>
              <SpacingInput
                onChange={handleChange}
                value={value.left}
                type='number'
                max={100}
                min={0}
                direction='left'
              />
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

export const BackgroundPopup = () => {
  const dimensions = {
    width: 350,
    height: 350,
  }
  const TABS = {
    COLOR: 'color',
    IMAGES: 'images',
    UNSPLASH: 'unspash',
  }
  const [active, setActive] = useState(TABS.COLOR)
  return (
    <WillyPopup
      style={{
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
      }}
    >
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
          <MainOption marginBottom={'0px!important'} padding={'0px'}>
            <PaletteColor width={dimensions.width} height={200} />
          </MainOption>
        )}
        {active == TABS.IMAGES && (
          <div tab-value='images' style={{}}>
            <div>
              <MainOption marginBottom={'0px'} padding={'0px'}>
                <div style={{ padding: '0px 18px', marginBottom: '18px' }}>
                  <ImageDropUpload>
                    <DeleteImageDiv id='delete-image-icon'>
                      <DeleteImageIcon />
                    </DeleteImageDiv>
                    <input style={{ display: 'none' }} type='file' accept='image/*' />
                    <FlexSpace5>
                      <div>
                        <ImageUploaderIcon />
                      </div>
                      <div className='dark-text'>Click or Drop to Upload Image</div>
                    </FlexSpace5>
                    <FlexCenter>Recommended Size &lt; 30MB</FlexCenter>
                  </ImageDropUpload>
                </div>
              </MainOption>
              <TextDivider>or</TextDivider>
              <MainOption style={{ padding: '0px 18px', marginBottom: '18px' }}>
                <div>Insert URL from the web</div>
                <ImageValidator>
                  <ImageInput type='text' />
                </ImageValidator>
              </MainOption>
            </div>
          </div>
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
