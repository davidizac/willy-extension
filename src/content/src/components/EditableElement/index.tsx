/* eslint-disable react/jsx-key */
/* eslint-disable camelcase */
import tinymce from 'tinymce'

import skinCss from '!raw-loader!tinymce/skins/ui/oxide/skin.css'
import skinCss2 from '!raw-loader!tinymce/skins/ui/oxide/content.css'
import skinCss3 from '!raw-loader!tinymce/skins/ui/oxide/skin.shadowdom.css'
import skinCss4 from '!raw-loader!tinymce/skins/ui/oxide/content.inline.css'
import grapesjsCss from '!raw-loader!grapesjs/dist/css/grapes.min.css'

import grapesjs from 'grapesjs'
import customStyle from '!raw-loader!./style.css'
import { useEffect, useRef, useState } from 'react'
import 'grapesjs-blocks-basic'

export default function EditableElement({ top, left, htmlContent }) {
  const elementRef = useRef(null)

  useEffect(() => {
    const editor = grapesjs.init({
      container: elementRef.current,
      fromElement: true,
      height: '100px',
      // Disable the storage manager for the moment
      width: '100%',
      panels: { defaults: [] },
      storageManager: false,
      plugins: ['gjs-blocks-basic'],
      blockManager: {
        appendTo: '#blocks',
      },
    })
    editor.on('component:add', (b) => {
      const size = document
        .getElementsByClassName('gjs-editor-cont')[0]
        .style.height.replace('px', '')
      document.getElementsByClassName('gjs-editor-cont')[0].style.height = `${
        parseInt(size) + b.views[0].el.clientHeight
      }px`
    })
    editor.on('component:clone', (b) => {
      const size = document
        .getElementsByClassName('gjs-editor-cont')[0]
        .style.height.replace('px', '')
      document.getElementsByClassName('gjs-editor-cont')[0].style.height = `${
        parseInt(size) + b.em.views[0].el.clientHeight
      }px`
    })
    editor.on('component:remove', (b) => {
      const size = document
        .getElementsByClassName('gjs-editor-cont')[0]
        .style.height.replace('px', '')
      document.getElementsByClassName('gjs-editor-cont')[0].style.height = `${
        parseInt(size) - b.views[0].el.clientHeight
      }px`
    })
  }, [])
  return (
    <div
      id='willy'
      style={{
        top,
        left,
        width: '300px',
        height: '200px',
        position: 'absolute',
      }}
    >
      <style type='text/css'>{grapesjsCss}</style>
      <style type='text/css'>{customStyle}</style>
      <style type='text/css'>{skinCss}</style>
      <style type='text/css'>{skinCss2}</style>
      <style type='text/css'>{skinCss3}</style>
      <style type='text/css'>{skinCss4}</style>
      <div className='editor-row'>
        <div className='editor-canvas'>
          <div ref={elementRef} style={{ backgroundColor: 'white' }}></div>
        </div>
      </div>
      <div id='blocks'></div>
    </div>
  )
}
