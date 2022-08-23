import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'
import { useState } from 'react'

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
  height: 42px;
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

const HeaderSize = styled.div`
  width: fit-content;
  display: flex;
  column-gap: 5px;
  height: 31px;
  align-items: center;
  font-size: var(--font-size-medium);
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

const ToolBarItem = styled.div`
  position: relative;
  opacity: 0.5;
  padding-bottom: 10px;
  margin-bottom: -10px;
  cursor: pointer;
`

const FontSize = styled(ToolBarItem)`
  opacity: 1;
  width: 51px;
  cursor: auto;
  overflow: visible;
  padding-bottom: 6px;
  margin-bottom: -6px;
`

const FontSizeInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 4px;
  border-radius: 3px;
  transition: background 0.3s linear;
  &:after {
    content: '';
    background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%3Cpath%20d%3D%22M1.41%200L6%204.58L10.59%200L12%201.41L6%207.41L0%201.41L1.41%200Z%22%20fill%3D%22%23C2CBD0%22/%3E%0A%3C/svg%3E);
    width: 12px;
    height: 8px;
  }
`

const FontSizeInput = styled.input`
  appearance: none;
  width: 100%;
  background: none;
  color: var(--color-bluish-dark-1);
  border: none;
  border-radius: 3px;
  padding: 1px;
  width: 31px;
  height: 22px;
  font-family: inherit;
`

export default function StyleToolbar() {
  const [activeItem, setActiveItem] = useState()

  const handleTextClick = (e) => {
    setActiveItem(e.target.id)
  }

  const borderBottomStyle = '2px solid #DD5584'

  const TextToolBar = () => {
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
    return (
      <NotLastToolBarSection sectionLabel={'Text'}>
        <HeaderSize
          id={TextItems.TEXT_TYPE}
          style={{
            borderBottom: `${activeItem == TextItems.TEXT_TYPE ? borderBottomStyle : 'none'}`,
          }}
          onClick={() => handleTextClick(TextItems.TEXT_TYPE)}
          data-tip='Text Type'
        >
          Normal
        </HeaderSize>
        <ToolBarItem
          id={TextItems.TYPOGRAPHY}
          style={{
            borderBottom: `${activeItem == TextItems.TYPOGRAPHY ? borderBottomStyle : 'none'}`,
          }}
          onClick={() => handleTextClick(TextItems.TYPOGRAPHY)}
          data-tip='Typography'
        >
          <TypographyIcon />
        </ToolBarItem>
        <FontSize
          id={TextItems.FONT_SIZE}
          style={{
            borderBottom: `${activeItem == TextItems.FONT_SIZE ? borderBottomStyle : 'none'}`,
          }}
          onClick={() => handleTextClick(TextItems.FONT_SIZE)}
          data-tip='Font Size'
        >
          <FontSizeInner>
            <FontSizeInput type='tel' max={99} min={2} value={14} />
          </FontSizeInner>
        </FontSize>
        <ToolBarItem
          id={TextItems.FONT_COLOR}
          style={{
            borderBottom: `${activeItem == TextItems.FONT_COLOR ? borderBottomStyle : 'none'}`,
          }}
          onClick={() => handleTextClick(TextItems.FONT_COLOR)}
          data-tip='Font Color'
        >
          <FontColorIcon />
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.BOLD}
          style={{ borderBottom: `${activeItem == TextItems.BOLD ? borderBottomStyle : 'none'}` }}
          onClick={() => handleTextClick(TextItems.BOLD)}
          data-tip='Bold'
        >
          <TextBoldIcon />
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.ITALIC}
          style={{ borderBottom: `${activeItem == TextItems.ITALIC ? borderBottomStyle : 'none'}` }}
          onClick={() => handleTextClick(TextItems.ITALIC)}
          data-tip='Italic'
        >
          <TextItalicIcon />
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.UNDERLINE}
          style={{
            borderBottom: `${activeItem == TextItems.UNDERLINE ? borderBottomStyle : 'none'}`,
          }}
          onClick={() => handleTextClick(TextItems.UNDERLINE)}
          data-tip='Underline'
        >
          <TextUnderLineIcon />
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.ALIGN}
          style={{ borderBottom: `${activeItem == TextItems.ALIGN ? borderBottomStyle : 'none'}` }}
          onClick={() => handleTextClick(TextItems.ALIGN)}
          data-tip='Align'
        >
          <JustifyContentIcon />
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.LIST}
          style={{ borderBottom: `${activeItem == TextItems.LIST ? borderBottomStyle : 'none'}` }}
          onClick={() => handleTextClick(TextItems.LIST)}
          data-tip='List'
        >
          <TextListIcon />
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.EMOJI}
          style={{ borderBottom: `${activeItem == TextItems.EMOJI ? borderBottomStyle : 'none'}` }}
          onClick={() => handleTextClick(TextItems.EMOJI)}
          data-tip='Emoji'
        >
          <EmojiIcon />
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.PERSO}
          style={{ borderBottom: `${activeItem == TextItems.PERSO ? borderBottomStyle : 'none'}` }}
          onClick={() => handleTextClick(TextItems.PERSO)}
          data-tip='Personalization'
        >
          <TextPersonalizeIcon />
        </ToolBarItem>
        <ToolBarItem
          id={TextItems.LINK}
          style={{ borderBottom: `${activeItem == TextItems.LINK ? borderBottomStyle : 'none'}` }}
          onClick={() => handleTextClick(TextItems.LINK)}
          data-tip='Link'
        >
          <TextLinkIcon />
        </ToolBarItem>
      </NotLastToolBarSection>
    )
  }

  const SectionToolBar = () => {
    const SectionItems = {
      SPACING: 'Spacing',
      BACKGROUND: 'Background',
    }
    return (
      <ToolbarSection sectionLabel={'Section'}>
        <ToolBarItem
          id={SectionItems.SPACING}
          style={{
            borderBottom: `${activeItem == SectionItems.SPACING ? borderBottomStyle : 'none'}`,
          }}
          onClick={() => handleTextClick(SectionItems.SPACING)}
          data-tip='Spacing'
        >
          <SectionPaddingIcon />
        </ToolBarItem>
        <ToolBarItem
          id={SectionItems.BACKGROUND}
          style={{
            borderBottom: `${activeItem == SectionItems.BACKGROUND ? borderBottomStyle : 'none'}`,
          }}
          onClick={() => handleTextClick(SectionItems.BACKGROUND)}
          data-tip='Background'
          section={'SECTION'}
        >
          <BackgrondIcon />
        </ToolBarItem>
      </ToolbarSection>
    )
  }

  return (
    <SectionToolbar>
      <ToolBar>
        <TextToolBar />
        <SectionToolBar />
      </ToolBar>
      <ReactTooltip effect='solid' />
    </SectionToolbar>
  )
}
