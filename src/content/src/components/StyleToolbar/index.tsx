import styled from 'styled-components'
import { useEffect, useRef, useState } from 'react'

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
import { PopupWrapper } from '../PopupWrapper'

const ToolBar = styled.div`
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 1px 4px rgb(0 0 0 / 25%);
  padding: 4px 12px;
  display: flex;
  align-items: center;
  height: 100%;
`

const ToolbarSection = styled.div<{ sectionLabel: string; customTop: string }>`
  display: flex;
  align-items: center;
  height: 100%;

  &:before {
    content: ${(props) => `'${props.sectionLabel}'`};
    position: absolute;
    left: 0px;
    top: ${(props) => `${props.customTop || '-7px'}`};
    transform: translateY(-100%);
    line-height: 10px;
    color: #ffffff;
    background: #253041;
    border-radius: 4px 4px 0px 0px;
    padding: 4px 6px;
  }
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
  cursor: pointer;
  color: black;
  height: 100%;
  width: fit-content;
  display: flex;
  column-gap: 5px;
  align-items: center;
  font-size: 14px;
  justify-content: space-between;
  white-space: nowrap;
  line-height: 1;
  &:hover {
    opacity: 1;
  }
  ${(props) =>
    props.active
      ? ` &:after {
      content: '';
      width: 100%;
      position: absolute;
      height: 3px;
      background-color: #dd5584;
      bottom: -4px;
      opacity: 1;
    }`
      : ''};
`

const DropDownIcon = styled.div`
  background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%3Cpath%20d%3D%22M1.41%200L6%204.58L10.59%200L12%201.41L6%207.41L0%201.41L1.41%200Z%22%20fill%3D%22%23C2CBD0%22/%3E%0A%3C/svg%3E);
  width: 12px;
  height: 8px;
`

const FontSize = styled(ToolBarItem)`
  opacity: 1;
  outline: 0 !important;
  width: 31px;
  cursor: auto;
  overflow: visible;
  padding-bottom: 6px;
  margin-bottom: -6.5px;
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

export default function StyleToolbar() {
  const ref = useRef(null)

  // on hover display tooltip
  const [hoveredItem, setHoveredItem] = useState()
  const [tooltipPosition, setToolTipPosition] = useState()
  const [showToolTip, setShowTooltip] = useState(false)

  // on click display popup
  const [activeItem, setActiveItem] = useState()
  const [popupPosition, setPopupPosition] = useState()
  const [showPopup, setShowPopup] = useState(false)

  useOnClickOutside(ref, () => setShowPopup(false))

  const handleClick = (e, id) => {
    // the element position (e.target) is relative to the viewport.
    // However, the tooltip is relative to his parent.
    // So we need to substract the parent position from the tooltip position.

    const parentPosition = ref.current.getClientRects()[0]
    const elementPosition = e.target.getClientRects()[0]
    setActiveItem(id)
    if (id == activeItem && showPopup) setShowPopup(false)
    else setShowPopup(true)
    setPopupPosition(elementPosition.left - parentPosition.left)
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

  const Tooltip = ({ text, left }) => {
    const ref = useRef(null)
    const [width, setWidth] = useState(0)
    useEffect(() => {
      if (!ref || !ref.current) return
      const doc = document.createElement('span')
      doc.innerText = text
      ref.current.appendChild(doc)
      const { width } = doc.getClientRects()[0]
      setWidth(width)
    }, [ref])
    return (
      <div
        ref={ref}
        style={{
          position: 'absolute',
          left: `${left - width / 2}px`,
          top: '-50px',
          padding: '10px 15px',
          borderRadius: '20px',
          background: '#ddd',
          color: '#3d4a52',
          boxShadow: '0px 1px 4px rgb(0 0 0 / 25%)',
        }}
      ></div>
    )
  }

  const handleMouseEvent = (e, id) => {
    // the element position (e.target) is relative to the viewport.
    // However, the tooltip is relative to his parent.
    // So we need to substract the parent position from the tooltip position.

    const parentPosition = ref.current.getClientRects()[0]
    const elementPosition = e.target.getClientRects()[0]
    setHoveredItem(id)
    setShowTooltip(true)
    setToolTipPosition(elementPosition.left - parentPosition.left)
  }

  const TextToolBar = () => {
    const onFontSizeChange = (e) => {}
    return (
      <NotLastToolBarSection sectionLabel={'Text'}>
        <ToolBarItem
          id={TextItems.TEXT_TYPE}
          active={activeItem == TextItems.TEXT_TYPE}
          onClick={(e) => {
            handleClick(e, TextItems.TEXT_TYPE)
          }}
          showCaret={true}
          onMouseOver={(e) => handleMouseEvent(e, TextItems.TEXT_TYPE)}
          onMouseOut={(e) => setShowTooltip(false)}
        >
          Normal
          <DropDownIcon />
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.TYPOGRAPHY}
          active={activeItem == TextItems.TYPOGRAPHY}
          onClick={(e) => {
            handleClick(e, TextItems.TYPOGRAPHY)
          }}
          onMouseOver={(e) => handleMouseEvent(e, TextItems.TYPOGRAPHY)}
          onMouseOut={(e) => setShowTooltip(false)}
        >
          <TypographyIcon />
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.FONT_SIZE}
          active={activeItem == TextItems.FONT_SIZE}
          onClick={(e) => {
            handleClick(e, TextItems.FONT_SIZE)
          }}
          onMouseOver={(e) => handleMouseEvent(e, TextItems.FONT_SIZE)}
          onMouseOut={(e) => setShowTooltip(false)}
        >
          <FontSizeInner active={activeItem == TextItems.FONT_SIZE}>
            <FontSize>
              <FontSizeInput value={14} onChange={onFontSizeChange}></FontSizeInput>
            </FontSize>
            <DropDownIcon />
          </FontSizeInner>
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.FONT_COLOR}
          active={activeItem == TextItems.FONT_COLOR}
          onClick={(e) => {
            handleClick(e, TextItems.FONT_COLOR)
          }}
          onMouseOver={(e) => handleMouseEvent(e, TextItems.FONT_COLOR)}
          onMouseOut={(e) => setShowTooltip(false)}
        >
          <FontColorIcon />
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.BOLD}
          active={activeItem == TextItems.BOLD}
          onClick={(e) => {
            handleClick(e, TextItems.BOLD)
          }}
          onMouseOver={(e) => handleMouseEvent(e, TextItems.BOLD)}
          onMouseOut={(e) => setShowTooltip(false)}
        >
          <TextBoldIcon />
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.ITALIC}
          active={activeItem == TextItems.ITALIC}
          onClick={(e) => {
            handleClick(e, TextItems.ITALIC)
          }}
          onMouseOver={(e) => handleMouseEvent(e, TextItems.ITALIC)}
          onMouseOut={(e) => setShowTooltip(false)}
        >
          <TextItalicIcon />
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.UNDERLINE}
          active={activeItem == TextItems.UNDERLINE}
          onClick={(e) => {
            handleClick(e, TextItems.UNDERLINE)
          }}
          onMouseOver={(e) => handleMouseEvent(e, TextItems.UNDERLINE)}
          onMouseOut={(e) => setShowTooltip(false)}
        >
          <TextUnderLineIcon />
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.ALIGN}
          active={activeItem == TextItems.ALIGN}
          onClick={(e) => {
            handleClick(e, TextItems.ALIGN)
          }}
          onMouseOver={(e) => handleMouseEvent(e, TextItems.ALIGN)}
          onMouseOut={(e) => setShowTooltip(false)}
        >
          <JustifyContentIcon />
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.LIST}
          active={activeItem == TextItems.LIST}
          onClick={(e) => {
            handleClick(e, TextItems.LIST)
          }}
          onMouseOver={(e) => handleMouseEvent(e, TextItems.LIST)}
          onMouseOut={(e) => setShowTooltip(false)}
        >
          <TextListIcon />
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.EMOJI}
          active={activeItem == TextItems.EMOJI}
          onClick={(e) => {
            handleClick(e, TextItems.EMOJI)
          }}
          onMouseOver={(e) => handleMouseEvent(e, TextItems.EMOJI)}
          onMouseOut={(e) => setShowTooltip(false)}
        >
          <EmojiIcon />
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.PERSO}
          active={activeItem == TextItems.PERSO}
          onClick={(e) => {
            handleClick(e, TextItems.PERSO)
          }}
          onMouseOver={(e) => handleMouseEvent(e, TextItems.PERSO)}
          onMouseOut={(e) => setShowTooltip(false)}
        >
          <TextPersonalizeIcon />
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.LINK}
          active={activeItem == TextItems.LINK}
          onClick={(e) => {
            handleClick(e, TextItems.LINK)
          }}
          onMouseOver={(e) => handleMouseEvent(e, TextItems.LINK)}
          onMouseOut={(e) => setShowTooltip(false)}
        >
          <TextLinkIcon />
        </ToolBarItem>
      </NotLastToolBarSection>
    )
  }

  const SectionToolBar = () => {
    return (
      <ToolbarSection sectionLabel={'Section'} customTop={'-12px'}>
        <ToolBarItem
          id={SectionItems.SPACING}
          active={activeItem == SectionItems.SPACING}
          onClick={(e) => handleClick(e, SectionItems.SPACING)}
          onMouseOver={(e) => handleMouseEvent(e, SectionItems.SPACING)}
          onMouseOut={(e) => setShowTooltip(false)}
        >
          <SectionPaddingIcon />
        </ToolBarItem>
        <ToolBarItem
          id={SectionItems.BACKGROUND}
          active={activeItem == SectionItems.BACKGROUND}
          onClick={(e) => handleClick(e, SectionItems.BACKGROUND)}
          onMouseOver={(e) => handleMouseEvent(e, SectionItems.BACKGROUND)}
          onMouseOut={(e) => setShowTooltip(false)}
          data-for='test'
          section={'SECTION'}
        >
          <BackgrondIcon />
        </ToolBarItem>
      </ToolbarSection>
    )
  }

  return (
    <div ref={ref}>
      <ToolBar>
        <TextToolBar />
        <SectionToolBar />
      </ToolBar>
      {showPopup && activeItem == TextItems.TEXT_TYPE && (
        <PopupWrapper left={popupPosition - 100}>
          <HeadingPopup />
        </PopupWrapper>
      )}
      {showPopup && activeItem == TextItems.FONT_SIZE && (
        <PopupWrapper left={popupPosition}>
          <FontSizePopup />
        </PopupWrapper>
      )}
      {showPopup && activeItem == TextItems.TYPOGRAPHY && (
        <PopupWrapper left={popupPosition - 123}>
          <TypographyPopup />
        </PopupWrapper>
      )}
      {showPopup && activeItem == TextItems.FONT_COLOR && (
        <PopupWrapper left={popupPosition - 123}>
          <PaletteColorPopup />
        </PopupWrapper>
      )}
      {showPopup && activeItem == TextItems.ALIGN && (
        <PopupWrapper left={popupPosition - 19}>
          <AlignPopup />
        </PopupWrapper>
      )}
      {showPopup && activeItem == TextItems.LIST && (
        <PopupWrapper left={popupPosition - 19}>
          <ListPopup />
        </PopupWrapper>
      )}
      {showPopup && activeItem == TextItems.EMOJI && (
        <PopupWrapper left={popupPosition - 120}>
          <EmojiPickerPopup />
        </PopupWrapper>
      )}
      {showPopup && activeItem == TextItems.PERSO && (
        <PopupWrapper left={popupPosition - 100}>
          <PersonalizationPopup />
        </PopupWrapper>
      )}
      {showPopup && activeItem == TextItems.LINK && (
        <PopupWrapper left={popupPosition - 145}>
          <AddLinkPopup />
        </PopupWrapper>
      )}
      {showPopup && activeItem == SectionItems.SPACING && (
        <PopupWrapper left={popupPosition - 110}>
          <SpacingPopup />
        </PopupWrapper>
      )}
      {showPopup && activeItem == SectionItems.BACKGROUND && (
        <PopupWrapper left={popupPosition - 160}>
          <BackgroundPopup />
        </PopupWrapper>
      )}
      {showToolTip && <Tooltip text={hoveredItem} left={tooltipPosition}></Tooltip>}
    </div>
  )
}
