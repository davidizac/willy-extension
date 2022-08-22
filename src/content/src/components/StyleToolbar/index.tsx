import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'

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
  return (
    <SectionToolbar>
      <ToolBar>
        <NotLastToolBarSection sectionLabel={'Text'}>
          <HeaderSize data-tip='hello world'>Normal</HeaderSize>
          <ToolBarItem data-tip='Typography'>
            <TypographyIcon />
          </ToolBarItem>
          <FontSize data-tip='Font Size'>
            <FontSizeInner>
              <FontSizeInput type='tel' max={99} min={2} value={14} />
            </FontSizeInner>
          </FontSize>
          <ToolBarItem data-tip='Font Color'>
            <FontColorIcon />
          </ToolBarItem>
          <ToolBarItem data-tip='Bold'>
            <TextBoldIcon />
          </ToolBarItem>
          <ToolBarItem data-tip='Italic'>
            <TextItalicIcon />
          </ToolBarItem>
          <ToolBarItem data-tip='Underline'>
            <TextUnderLineIcon />
          </ToolBarItem>
          <ToolBarItem data-tip='Align'>
            <JustifyContentIcon />
          </ToolBarItem>
          <ToolBarItem data-tip='List'>
            <TextListIcon />
          </ToolBarItem>
          <ToolBarItem data-tip='Emoji'>
            <EmojiIcon />
          </ToolBarItem>
          <ToolBarItem data-tip='Personalization'>
            <TextPersonalizeIcon />
          </ToolBarItem>
          <ToolBarItem data-tip='Link'>
            <TextLinkIcon />
          </ToolBarItem>
        </NotLastToolBarSection>
        <ToolbarSection sectionLabel={'Section'}>
          <ToolBarItem data-tip='Spacing'>
            <SectionPaddingIcon />
          </ToolBarItem>
          <ToolBarItem data-tip='Background' section={'SECTION'}>
            <BackgrondIcon />
          </ToolBarItem>
        </ToolbarSection>
      </ToolBar>
      <ReactTooltip effect='solid' />
    </SectionToolbar>
  )
}
