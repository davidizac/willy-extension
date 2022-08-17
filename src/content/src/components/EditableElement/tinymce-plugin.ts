/* eslint-disable react/jsx-key */
/* eslint-disable camelcase */
import tinymce from 'tinymce'

import 'tinymce/tinymce.js'
import 'tinymce/themes/silver/index.js'
import 'tinymce/icons/default/index.js'
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
import ckeditor from 'grapesjs-plugin-ckeditor'

export const tinymcePlugin = (editor, opts = {}) => {
  const options = {
    ...{
      // TinyMCE options
      options: {},

      // On which side of the element to position the toolbar
      // Available options: 'left|center|right'
      position: 'left',
    },
    ...opts,
  }

  if (!tinymce) {
    throw new Error('tinymce not found')
  }

  editor.setCustomRte({
    enable(el, rte = {}) {
      console.log('log')
      const { activeEditor } = rte
      const rteToolbar = editor.RichTextEditor.getToolbarEl()
      const tlbSelector = `.${rteToolbar.className.split(' ').join('.')}`
      el.contentEditable = true

      // Hide everything inside the GrapesJS' toolbar container
      // ;[].forEach.call(rteToolbar.children, (child) => (child.style.display = 'none'))

      // // If already exists I'll just focus on it
      // if (activeEditor) {
      //   activeEditor.show()
      //   activeEditor.focus()
      //   return rte
      // }

      // Init TinyMCE
      rte = tinymce.init({
        target: el,
        menubar: false,
        inline: true,
        plugins: ['link', 'lists', 'powerpaste', 'autolink', 'image', 'emoticons'],
        toolbar_persist: true,
        toolbar_location: 'bottom',
        forced_root_block: '', // avoid '<p>' wrapper
        fixed_toolbar_container: tlbSelector, // place the toolbar inside GrapesJS' toolbar container
        setup(ed) {
          ed.on('init', (e) => {
            console.log('toolbar init')
            ed.focus()
          })
          // Fix the position of the toolbar when the editor is created
          ed.once('focus', (e) => {
            console.log('toolbar focus')
            setTimeout(() => editor.trigger('canvasScroll'))
          })
        },
        ...options.options,
      })

      // The init method returns a Promise, so we need to store the editor instance on it
      rte.then((result) => (rte.activeEditor = result[0]))

      return rte
    },

    disable(el, rte = {}) {
      const { activeEditor } = rte
      el.contentEditable = false
      activeEditor && activeEditor.hide()
    },
  })

  // Update RTE toolbar position
  editor.on('rteToolbarPosUpdate', (pos) => {
    console.log('RTE toolbar position update: ', pos)
    // Update by position
    // switch (options.position) {
    //   case 'center':
    //     const diff = pos.elementWidth / 2 - pos.targetWidth / 2
    //     pos.left = pos.elementLeft + diff
    //     break
    //   case 'right':
    //     const width = pos.targetWidth
    //     pos.left = pos.elementLeft + pos.elementWidth - width
    //     break
    // }

    // if (pos.top <= pos.canvasTop) {
    //   pos.top = pos.elementTop + pos.elementHeight
    // }

    // // Check if not outside of the canvas
    // if (pos.left < pos.canvasLeft) {
    //   pos.left = pos.canvasLeft
    // }
  })
}
