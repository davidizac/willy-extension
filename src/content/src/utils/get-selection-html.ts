export default function getSelectionHtml() {
  let html = ''
  if (typeof window.getSelection != 'undefined') {
    const sel = window.getSelection()
    if (sel.rangeCount) {
      const container = document.createElement('div')
      for (let i = 0, len = sel.rangeCount; i < len; ++i) {
        container.appendChild(sel.getRangeAt(i).cloneContents())
      }
      html = container.innerHTML
    }
  } else if (typeof document.selection != 'undefined') {
    if (document.selection.type == 'Text') {
      html = document.selection.createRange().htmlText
    }
  }
  return html
}
