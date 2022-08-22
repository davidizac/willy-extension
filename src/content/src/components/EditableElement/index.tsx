/* eslint-disable react/jsx-key */
/* eslint-disable camelcase */
import grapesjsCss from '!raw-loader!grapesjs/dist/css/grapes.min.css'
import customStyle from '!raw-loader!./style.css'
import { useEffect, useRef, useState } from 'react'
import { initEditor } from '../../utils/editor'
import { EditableIcon, PlusIcon } from '../../icons'
import ControlToolbar from '../ControlToolbar'
import styled from 'styled-components'

const ToolBarContainer = styled.div`
  position: absolute;
  z-index: 2;
`

export default function EditableElement({ top, left, editorConfig }) {
  const elementRef = useRef(null)
  const plusIconRef = useRef(null)
  const editableIconRef = useRef(null)
  const [editor, setEditor] = useState()
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null)
  const [editedElement, setEditedElement] = useState<HTMLElement | null>(null)

  const [iconsProp, setIconsProp] = useState({
    display: 'none',
    edit: {
      top: '0px',
      left: '0px',
    },
    plus: {
      top: '0px',
      left: '0px',
    },
  })

  const getToolBarPosition = () => {
    const { top, left } = editedElement?.getClientRects()[0]
    return {
      top: `${top + 30}px`,
      left: `${left}px`,
    }
  }

  const handleMouseOver = (el) => {
    setEditedElement((editedElement) => {
      if (!editedElement) {
        if (!el.classList.contains('gjs-selected')) {
          el.classList.add('hovered')
        }
        const dimension = el.getClientRects()[0]
        setHoveredElement(el)
        setIconsProp({
          display: 'inline-block',
          plus: {
            top: `${dimension.bottom - 10}px`,
            left: `${dimension.left + dimension.width / 2}px`,
          },
          edit: {
            top: `${dimension.top - 10 + dimension.height / 2}px`,
            left: `${dimension.left + dimension.width / 2}px`,
          },
        })
      }
      return editedElement
    })
  }

  const handleMouseOut = (el) => {
    if (editableIconRef.current.getAttribute('hovered') == 'true') return
    if (plusIconRef.current.getAttribute('hovered') == 'true') return
    if (!editedElement) {
      el.classList.remove('hovered')
      setIconVisibility(false)
    }
  }

  const setIconVisibility = (isVisible) => {
    setIconsProp((iconsProp) => {
      const display = isVisible ? 'inline-block' : 'none'
      return {
        ...iconsProp,
        display,
      }
    })
  }

  const handleEditableIconClick = () => {
    hoveredElement.contentEditable = 'true'
    hoveredElement.focus()
    editor.select(hoveredElement)
    editor
      .getComponents()
      .forEach((component) => component.getEl().classList.add('not-gjs-selected'))
    hoveredElement?.classList.remove('not-gjs-selected')
    setIconVisibility(false)
    setHoveredElement(null)
    const editedElement = hoveredElement
    setEditedElement(editedElement)
  }

  const handleSaveButtonClick = () => {
    editor
      .getComponents()
      .forEach((component) => component.getEl().classList.remove('not-gjs-selected'))
    editor.select(editor.getWrapper())
    setEditedElement(null)
    setIconVisibility(true)
  }

  useEffect(() => {
    const editor = initEditor({
      editorConfig,
      container: elementRef.current,
      handleMouseOut,
      handleMouseOver,
    })
    setEditor(editor)
  }, [elementRef])

  return (
    <div
      id='willy'
      style={{
        top,
        left,
        position: 'absolute',
      }}
    >
      <style type='text/css'>{grapesjsCss}</style>
      <style type='text/css'>{customStyle}</style>
      <div className='editor-row'>
        <div className='editor-canvas'>
          <div ref={elementRef} style={{ backgroundColor: 'white' }}></div>
          <div id='willy-container-tool' style={{ position: 'absolute', top: '0px' }}>
            <div
              ref={editableIconRef}
              className='editable-icon'
              onClick={handleEditableIconClick}
              onMouseOver={setIconVisibility.bind(this, [true])}
              style={{
                top: iconsProp.edit.top,
                left: iconsProp.edit.left,
                display: iconsProp.display,
              }}
            >
              <div className='editable-icon-inner'>
                <EditableIcon />
              </div>
            </div>
            <div
              ref={plusIconRef}
              className='plus-icon'
              onMouseOver={setIconVisibility.bind(this, [true])}
              style={{
                top: iconsProp.plus.top,
                left: iconsProp.plus.left,
                display: iconsProp.display,
              }}
            >
              <PlusIcon />
            </div>
          </div>
        </div>
      </div>
      <div id='blocks' style={{ position: 'fixed' }}></div>
      {editedElement && (
        <ToolBarContainer style={getToolBarPosition()}>
          <ControlToolbar handleSaveButtonClick={handleSaveButtonClick} />
        </ToolBarContainer>
      )}
    </div>
  )
}
