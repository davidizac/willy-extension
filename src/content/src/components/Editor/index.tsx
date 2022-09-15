/* eslint-disable react/jsx-key */
/* eslint-disable camelcase */
import grapesjsCss from '!raw-loader!grapesjs/dist/css/grapes.min.css'
import customStyle from '!raw-loader!./style.css'
import grapesjsRteCss from '!raw-loader!grapesjs-rte-extensions/dist/grapesjs-rte-extensions.min.css'

import { useEffect, useRef, useState } from 'react'
import { initEditor } from '../../utils/editor'
import { EditableIcon, PlusIcon } from '../../icons'
import { useSize } from '../../hooks'
import { Toolbar } from '../Toolbar'
import { focusingState } from '../../atoms/focus.state'
import { useRecoilState } from 'recoil'
import { getRecoil, setRecoil } from 'recoil-nexus'
import { selectionState } from '../../atoms/selection.state'
import getIframe from '../../utils/get-iframe'
import { editorState } from '../../atoms/editor.state'
import { selectedElementState } from '../../atoms/selected-element.state'

export default function EditableElement({ editorConfig, targetElement }) {
  const { top, left } = editorConfig
  const elementRef = useRef(null)
  const plusIconRef = useRef(null)
  const editableIconRef = useRef(null)
  const [editor, setEditor] = useState()

  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null)
  const [editedElement, setEditedElement] = useState<HTMLElement | null>(null)
  const [, setIsFocus] = useRecoilState(focusingState)
  // Hook called whenever there is a change to the size of the canvas.
  // We need to get this changing information to update the top position of the toolbar
  const canvasSize = useSize(elementRef)

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

  // update toobar state
  const handleMouseUp = (el) => {
    const iframe = getIframe()

    const selection = iframe.contentWindow.getSelection()
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0)
      setRecoil(selectionState, range)
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

  const handleEditableIconClick = async () => {
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
    setRecoil(selectedElementState, editedElement)
    setIsFocus(true)
  }

  const handleSaveButtonClick = () => {
    editor
      .getComponents()
      .forEach((component) => component.getEl().classList.remove('not-gjs-selected'))
    editor.select(editor.getWrapper())
    setEditedElement(null)
    setIconVisibility(true)
    setIsFocus(false)
  }

  useEffect(() => {
    const editor = initEditor({
      editorConfig,
      container: elementRef.current,
      handleMouseOut,
      handleMouseOver,
      handleMouseUp,
    })
    setEditor(editor)
    setRecoil(editorState, editor)
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
      <style type='text/css'>{grapesjsRteCss}</style>
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
                animation: 'fade-in 0.5s ease-in-out',
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
                animation: 'fade-in 0.5s ease-in-out',
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
        <Toolbar
          editedElement={editedElement}
          handleSaveButtonClick={handleSaveButtonClick}
          canvasSize={canvasSize}
        />
      )}
    </div>
  )
}
