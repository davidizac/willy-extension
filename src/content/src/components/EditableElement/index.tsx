/* eslint-disable camelcase */
import tinymce from 'tinymce'

import 'tinymce/tinymce.js'
import 'tinymce/themes/silver/index.js'
import 'tinymce/icons/default/index.js'

import skinCss from '!raw-loader!tinymce/skins/ui/oxide/skin.css'
import skinCss2 from '!raw-loader!tinymce/skins/ui/oxide/content.css'
import skinCss3 from '!raw-loader!tinymce/skins/ui/oxide/skin.shadowdom.css'
import skinCss4 from '!raw-loader!tinymce/skins/ui/oxide/content.inline.css'

// importing the plugin js.
import 'tinymce/plugins/advlist/index.js'
import 'tinymce/plugins/autolink/index.js'
import 'tinymce/plugins/link/index.js'
import 'tinymce/plugins/image/index.js'
import 'tinymce/plugins/lists/index.js'
import 'tinymce/plugins/charmap/index.js'
import 'tinymce/plugins/anchor/index.js'
import 'tinymce/plugins/searchreplace/index.js'
import 'tinymce/plugins/wordcount/index.js'
import 'tinymce/plugins/code/index.js'
import 'tinymce/plugins/fullscreen/index.js'
import 'tinymce/plugins/insertdatetime/index.js'
import 'tinymce/plugins/media/index.js'
import 'tinymce/plugins/nonbreaking/index.js'
import 'tinymce/plugins/table/index.js'
import 'tinymce/plugins/template/index.js'
import 'tinymce/plugins/help/index.js'
import 'tinymce/models/dom/index.js'
import 'tinymce/plugins/emoticons/index.js'
import grapesjs from 'grapesjs'

import { useEffect, useRef } from 'react'

export default function EditableElement({ top, left, htmlContent }) {
  const elementRef = useRef(null)
  useEffect(() => {
    tinymce.init({
      target: elementRef.current,
      menubar: false,
      inline: true,
      plugins: ['link', 'lists', 'powerpaste', 'autolink', 'image', 'emoticons'],
      toolbar_persist: true,
      toolbar_location: 'bottom',
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
      <style type='text/css'>{skinCss}</style>
      <style type='text/css'>{skinCss2}</style>
      <style type='text/css'>{skinCss3}</style>
      <style type='text/css'>{skinCss4}</style>
      <div
        ref={elementRef}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        style={{ backgroundColor: 'white' }}
      ></div>
    </div>
  )
}
