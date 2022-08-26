import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'
import { useRef, useState } from 'react'

import {
  BackgrondIcon,
  EmojiIcon,
  FontColorIcon,
  JustifyContentIcon,
  SectionPaddingIcon,
  TextBoldIcon,
  TextItalicIcon,
  TextLinkIcon,
  TextListIcon,
  TextPersonalizeIcon,
  TextUnderLineIcon,
  TypographyIcon,
} from '../../icons'
import {
  AddLinkPopup,
  AlignPopup,
  BackgroundPopup,
  EmojiPickerPopup,
  FontSizePopup,
  HeadingPopup,
  ListPopup,
  PaletteColorPopup,
  PersonalizationPopup,
  SpacingPopup,
  TypographyPopup,
} from '../../popups/toolbar.popups'
import { useOnClickOutside } from '../../hooks'

const SectionToolbar = styled.div`
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 1px 4px rgb(0 0 0 / 25%);
`

const ToolBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 10px;
`

const ToolbarSection = styled(ToolBar)<{ sectionLabel: string }>`
  &:before {
    content: ${(props) => `'${props.sectionLabel}'`};
    position: absolute;
    left: 0px;
    top: 0px;
    transform: translateY(-100%);
    font-family: var(--font-family-tertiary);
    font-style: normal;
    font-weight: 600;
    font-size: var(--font-size-xsmall);
    line-height: 10px;
    color: #ffffff;
    background: #253041;
    border-radius: 4px 4px 0px 0px;
    padding: 4px 6px;
  }
  padding: 10px;
  height: 24px;
  position: relative;
  column-gap: 20px;
`

const NotLastToolBarSection = styled(ToolbarSection)`
  &:after {
    content: '';
    width: 1px;
    height: 24px;
    background: rgba(163, 176, 184, 0.26);
  }
`

const ToolBarItem = styled.div<{ active: boolean }>`
  position: relative;
  opacity: ${(props) => (props.active ? '1' : '0.5')};
  padding-bottom: 10px;
  margin-bottom: -10px;
  cursor: pointer;
  color: black;
  border-bottom: ${(props) => (props.active ? '3px solid #DD5584' : 'none')};
  &:hover {
    opacity: 1;
  }
`

const HeadingBarItem = styled(ToolBarItem)`
  width: fit-content;
  display: flex;
  column-gap: 5px;
  align-items: center;
  font-size: 14px;
  justify-content: space-between;
  white-space: nowrap;
  line-height: 1;
  &:after {
    content: '';
    background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%3Cpath%20d%3D%22M1.41%200L6%204.58L10.59%200L12%201.41L6%207.41L0%201.41L1.41%200Z%22%20fill%3D%22%23C2CBD0%22/%3E%0A%3C/svg%3E);
    width: 12px;
    height: 8px;
  }
`

const FontSize = styled(ToolBarItem)`
  opacity: 1;
  outline: 0 !important;
  width: 31px;
  cursor: auto;
  overflow: visible;
  padding-bottom: 6px;
  margin-bottom: -6px;
`

const FontSizeInner = styled.div<{ active: boolean }>`
  display: flex;
  outline: 0 !important;
  justify-content: space-between;
  align-items: center;
  padding: 2px 4px;
  border-radius: 3px;
  transition: background 0.3s linear;
  color: ${(props) => (props.active ? '#dd5584' : '#3d4a52')};
  background-color: ${(props) => (props.active ? 'rgba(221, 85, 132, 0.1)' : 'inherit')};
  &:after {
    content: '';
    background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%3Cpath%20d%3D%22M1.41%200L6%204.58L10.59%200L12%201.41L6%207.41L0%201.41L1.41%200Z%22%20fill%3D%22%23C2CBD0%22/%3E%0A%3C/svg%3E);
    width: 12px;
    height: 8px;
  }
`

const FontSizeInput = styled.input`
  appearance: none;
  outline: 0 !important;
  width: 100%;
  background: none;
  border: none;
  border-radius: 3px;
  padding: 1px;
  width: 31px;
  height: 22px;
  font-family: inherit;
`

export default function StyleToolbar({ left }) {
  const ref = useRef(null)
  left = parseInt(left.split('px')[0])
  const [activeItem, setActiveItem] = useState()
  const [popupPosition, setPopupPosition] = useState()
  const [showPopup, setShowPopup] = useState(false)

  useOnClickOutside(ref, () => setShowPopup(false))

  const handleClick = (e, id) => {
    setActiveItem(id)
    if (id == activeItem && showPopup) setShowPopup(false)
    else setShowPopup(true)
    setPopupPosition(e.target.getClientRects()[0].left - left)
  }

  const TextItems = {
    TEXT_TYPE: 'Text Type',
    TYPOGRAPHY: 'Typography',
    FONT_SIZE: 'Font Size',
    FONT_COLOR: 'Font Color',
    BOLD: 'Bold',
    ITALIC: 'Italic',
    UNDERLINE: 'Underline',
    ALIGN: 'Align',
    LIST: 'List',
    EMOJI: 'Emoji',
    PERSO: 'Personalization',
    LINK: 'Link',
  }

  const SectionItems = {
    SPACING: 'Spacing',
    BACKGROUND: 'Background',
  }

  const TextToolBar = () => {
    const onFontSizeChange = (e) => {}
    return (
      <NotLastToolBarSection sectionLabel={'Text'}>
        <HeadingBarItem
          id={TextItems.TEXT_TYPE}
          active={activeItem == TextItems.TEXT_TYPE}
          onClick={(e) => {
            handleClick(e, TextItems.TEXT_TYPE)
          }}
          showCaret={true}
          data-tip='Text Type'
        >
          Normal
        </HeadingBarItem>
        <ToolBarItem
          id={TextItems.TYPOGRAPHY}
          active={activeItem == TextItems.TYPOGRAPHY}
          onClick={(e) => {
            handleClick(e, TextItems.TYPOGRAPHY)
          }}
          data-tip='Typography'
        >
          <TypographyIcon />
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.FONT_SIZE}
          active={activeItem == TextItems.FONT_SIZE}
          onClick={(e) => {
            handleClick(e, TextItems.FONT_SIZE)
          }}
          data-tip='Font Size'
        >
          <FontSizeInner active={activeItem == TextItems.FONT_SIZE}>
            <FontSize>
              <FontSizeInput value={14} onChange={onFontSizeChange}></FontSizeInput>
            </FontSize>
          </FontSizeInner>
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.FONT_COLOR}
          active={activeItem == TextItems.FONT_COLOR}
          onClick={(e) => {
            handleClick(e, TextItems.FONT_COLOR)
          }}
          data-tip='Font Color'
        >
          <FontColorIcon />
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.BOLD}
          active={activeItem == TextItems.BOLD}
          onClick={(e) => {
            handleClick(e, TextItems.BOLD)
          }}
          data-tip='Bold'
        >
          <TextBoldIcon />
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.ITALIC}
          active={activeItem == TextItems.ITALIC}
          onClick={(e) => {
            handleClick(e, TextItems.ITALIC)
          }}
          data-tip='Italic'
        >
          <TextItalicIcon />
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.UNDERLINE}
          active={activeItem == TextItems.UNDERLINE}
          onClick={(e) => {
            handleClick(e, TextItems.UNDERLINE)
          }}
          data-tip='Underline'
        >
          <TextUnderLineIcon />
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.ALIGN}
          active={activeItem == TextItems.ALIGN}
          onClick={(e) => {
            handleClick(e, TextItems.ALIGN)
          }}
          data-tip='Align'
        >
          <JustifyContentIcon />
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.LIST}
          active={activeItem == TextItems.LIST}
          onClick={(e) => {
            handleClick(e, TextItems.LIST)
          }}
          data-tip='List'
        >
          <TextListIcon />
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.EMOJI}
          active={activeItem == TextItems.EMOJI}
          onClick={(e) => {
            handleClick(e, TextItems.EMOJI)
          }}
          data-tip='Emoji'
        >
          <EmojiIcon />
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.PERSO}
          active={activeItem == TextItems.PERSO}
          onClick={(e) => {
            handleClick(e, TextItems.PERSO)
          }}
          data-tip='Personalization'
        >
          <TextPersonalizeIcon />
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.LINK}
          active={activeItem == TextItems.LINK}
          onClick={(e) => {
            handleClick(e, TextItems.LINK)
          }}
          data-tip='Link'
        >
          <TextLinkIcon />
        </ToolBarItem>
      </NotLastToolBarSection>
    )
  }

  const SectionToolBar = () => {
    return (
      <ToolbarSection sectionLabel={'Section'}>
        <ToolBarItem
          id={SectionItems.SPACING}
          active={activeItem == SectionItems.SPACING}
          onClick={(e) => handleClick(e, SectionItems.SPACING)}
          data-tip='Spacing'
        >
          <SectionPaddingIcon />
        </ToolBarItem>
        <ToolBarItem
          id={SectionItems.BACKGROUND}
          active={activeItem == SectionItems.BACKGROUND}
          onClick={(e) => handleClick(e, SectionItems.BACKGROUND)}
          data-tip='Background'
          section={'SECTION'}
        >
          <BackgrondIcon />
        </ToolBarItem>
        {/* <ReactTooltip effect='solid' /> */}
      </ToolbarSection>
    )
  }

  return (
    <SectionToolbar ref={ref}>
      <ToolBar>
        <TextToolBar />
        <SectionToolBar />
      </ToolBar>
      {showPopup && activeItem == TextItems.TEXT_TYPE && (
        <HeadingPopup left={`${popupPosition - 100}px`} />
      )}
      {showPopup && activeItem == TextItems.FONT_SIZE && (
        <FontSizePopup left={`${popupPosition}px`} />
      )}
      {showPopup && activeItem == TextItems.TYPOGRAPHY && (
        <TypographyPopup left={`${popupPosition - 123}px`} />
      )}
      {showPopup && activeItem == TextItems.FONT_COLOR && (
        <PaletteColorPopup left={`${popupPosition - 123}px`} />
      )}
      {showPopup && activeItem == TextItems.ALIGN && (
        <AlignPopup left={`${popupPosition - 19}px`} />
      )}
      {showPopup && activeItem == TextItems.LIST && <ListPopup left={`${popupPosition - 19}px`} />}
      {showPopup && activeItem == TextItems.EMOJI && (
        <EmojiPickerPopup left={`${popupPosition - 120}px`} />
      )}
      {showPopup && activeItem == TextItems.PERSO && (
        <PersonalizationPopup left={`${popupPosition - 100}px`} />
      )}
      {showPopup && activeItem == TextItems.LINK && (
        <AddLinkPopup left={`${popupPosition - 100}px`} />
      )}
      {showPopup && activeItem == SectionItems.SPACING && (
        <SpacingPopup left={`${popupPosition - 100}px`} />
      )}
      {showPopup && activeItem == SectionItems.BACKGROUND && (
        <BackgroundPopup left={`${popupPosition - 100}px`} />
      )}
    </SectionToolbar>
  )
}
