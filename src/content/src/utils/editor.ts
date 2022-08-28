import grapesjs from 'grapesjs'

const resizeIframe = (iframe, editor) => {
  const elementRef = editor.getWrapper().getEl()
  iframe.style.height = elementRef.offsetHeight + 1 + 'px'
  iframe.style.width = elementRef.offsetWidth + 1 + 'px'
}

export function initEditor({ editorConfig, container, handleMouseOver, handleMouseOut }) {
  const { width } = editorConfig

  const editor = grapesjs.init({
    container: container,
    fromElement: true,
    height: 'auto',
    width: '100%',
    panels: { defaults: [] },
    storageManager: false,
    blockManager: {
      appendTo: '#blocks',
    },
  })
  const comps = editor.DomComponents
  const iframe = document
    .getElementsByTagName('willy-container')[0]
    .children[1].shadowRoot.children[0].getElementsByClassName('gjs-frame')[0]

  iframe.style.width = width + 1 + 'px'

  comps.addType('willy-text', {
    extend: 'text',
    extendView: 'text',
    extendFn: ['init'],
    model: {
      defaults: {
        ...comps.getType('text').model.prototype.defaults,
        hoverable: true,
        highlightable: false,
        draggable: false,
        droppable: false,
        badgable: false,
        attributes: { class: 'willy-text' },
        styles: `.willy-text { border: 2px solid transparent; transition: none; background-color: inherit; min-height: 40px; }`,
      },
    },
    view: {
      events: {
        ...comps.getType('text').view.prototype.events(),
        mouseover: 'onMouseOver',
        mouseout: 'onMouseOut',
        click: (ev) => {
          ev.stopPropagation()
        },
        dblclick: (ev) => {
          ev.stopPropagation()
        },
      },
      onMouseOver(ev) {
        ev?.stopPropagation()
        // Only if element not selected, apply hover class
        handleMouseOver(this.el)
      },
      onMouseOut(ev) {
        ev?.stopPropagation()
        handleMouseOut(this.el)
      },
    },
  })

  editor.addComponents('<div data-gjs-type="willy-text">Test Component</div>')
  editor.addComponents('<div data-gjs-type="willy-text">Test Component 2</div>')

  const wrapper = editor.getWrapper()
  editor.select(wrapper)
  iframe.addEventListener('load', function () {
    // Workaround because need to wait for editor to load in order to get the height of the wrapper
    setTimeout(() => {
      resizeIframe(iframe, editor)
    })
    editor.addStyle(
      'html, body{background-color: transparent; width: fit-content; height: fit-content; outline: 0!important;}',
    )
    editor.addStyle('*{outline:none !important;}')

    editor.addStyle(
      `[data-gjs-type="wrapper"]{min-height: auto!important;width: ${width}px; overflow-x: hidden; background-color: white; border-radius: 10px!important }`,
    )
    editor.addStyle(
      `.gjs-selected, .hovered{ outline: none!important;  outline-offset: 0px!important; box-shadow: 5px 10px 18px #888888;transition: box-shadow 0.5s ease-out }`,
    )
    editor.addStyle(
      `.hovered{ border: 2px dashed #FF9200!important; cursor: default !important; user-select: none !important; transition: background-color 0.5s ease-out, border 0.5s ease-out, opacity 0.5s ease-out; background-color: rgba(255, 146, 0, 0.4)}`,
    )
    editor.addStyle(
      `.not-gjs-selected { opacity: 0.7; background-color: rgba(192, 192, 192, 0.7);user-select: none !important;}`,
    )
  })
  editor.on(
    'change:changesCount component:update component:add component:remove canvas:drop',
    function (e) {
      resizeIframe(iframe, editor)
    },
  )
  return editor
}
