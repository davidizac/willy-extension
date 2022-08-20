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
import 'grapesjs-rte-extensions/dist/grapesjs-rte-extensions.min.js'
import iconPlus from '../../../assets/plus-icon.svg'

export default function EditableElement({ top, left, htmlContent }) {
  const elementRef = useRef(null)

  useEffect(() => {
    const editor = grapesjs.init({
      container: elementRef.current,
      fromElement: true,
      height: 'auto',
      // Disable the storage manager for the moment
      width: '100%',
      panels: { defaults: [] },
      storageManager: false,
      plugins: ['gjs-blocks-basic'],
      blockManager: {
        appendTo: '#blocks',
      },
    })

    const domc = editor.DomComponents

    domc.addType('text', {
      view: {
        events: {
          mouseover: 'onMouseOver',
          mouseout: 'onMouseOut',
        },

        onRender() {
          const plusIcon = document.createElement('div')
          plusIcon.className = 'plus-icon'
          plusIcon.innerHTML = iconPlus
          plusIcon.style.display = 'none'
          this.el.appendChild(plusIcon)
        },

        onMouseOver(ev) {
          ev.stopPropagation()
          this.el.style.border = '2px dashed #9997FF'
          this.el.style.transition = 'opacity 0.7s ease-out'
          this.el.style.backgroundColor = 'rgba(153, 151, 255, 0.1)'
          const plusIcon = this.el.querySelectorAll('.plus-icon')[0]
          plusIcon.style.display = 'block'
        },
        onMouseOut(ev) {
          ev.stopPropagation()
          this.el.style.border = 'none'
          this.el.style.transition = 'none'
          this.el.style.backgroundColor = 'inherit'
          const plusIcon = this.el.querySelectorAll('.plus-icon')[0]
          plusIcon.style.display = 'none'
        },
      },
    })

    const iframe = document.getElementsByClassName('gjs-frame')[0]

    iframe.addEventListener('load', function () {
      const elementRef =
        iframe.contentWindow.document.querySelectorAll('[data-gjs-type=wrapper]')[0]
      iframe.contentDocument.body.style.backgroundColor = 'transparent'
      editor.addStyle(
        '[data-gjs-type="wrapper"]{min-height: 110px;min-width: 250px; overflow-x: hidden; background-color: white; width: fit-content; border-radius: 10px }',
      )
      editor.addStyle('.gjs-selected{outline: none!important; outline-offset: 0px!important}')
      iframe.style.height = elementRef.scrollHeight + 'px'
      iframe.style.width = elementRef.scrollWidth + 'px'
      iframe.style.transition = 'none'
    })
    editor.on('change:changesCount', function (e) {
      const elementRef =
        iframe.contentWindow.document.querySelectorAll('[data-gjs-type=wrapper]')[0]
      iframe.style.height = elementRef.scrollHeight + 'px'
      iframe.style.width = elementRef.scrollWidth + 'px'
    })
    editor.on('component:update', function (e) {
      const elementRef =
        iframe.contentWindow.document.querySelectorAll('[data-gjs-type=wrapper]')[0]
      iframe.style.height = elementRef.scrollHeight + 'px'
      iframe.style.width = elementRef.scrollWidth + 'px'
    })
    editor.on('component:add', function (e) {
      const elementRef =
        iframe.contentWindow.document.querySelectorAll('[data-gjs-type=wrapper]')[0]
      iframe.style.height = elementRef.scrollHeight + 'px'
      iframe.style.width = elementRef.scrollWidth + 'px'
    })
    editor.on('component:remove', function (e) {
      const elementRef =
        iframe.contentWindow.document.querySelectorAll('[data-gjs-type=wrapper]')[0]
      iframe.style.height = elementRef.scrollHeight + 'px'
      iframe.style.width = elementRef.scrollWidth + 'px'
    })
    editor.on('canvas:drop', function (e) {
      const elementRef =
        iframe.contentWindow.document.querySelectorAll('[data-gjs-type=wrapper]')[0]
      iframe.style.height = elementRef.scrollHeight + 'px'
      iframe.style.width = elementRef.scrollWidth + 'px'
    })
  }, [])
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
      <style type='text/css'>{skinCss}</style>
      <style type='text/css'>{skinCss2}</style>
      <style type='text/css'>{skinCss3}</style>
      <style type='text/css'>{skinCss4}</style>
      <div className='editor-row'>
        <div className='editor-canvas'>
          <div ref={elementRef} style={{ backgroundColor: 'white' }}></div>
        </div>
      </div>
      <div id='blocks' style={{ position: 'fixed' }}></div>
    </div>
  )
}
