import grapesjs from 'grapesjs'
import getIframe from './get-iframe'
import nodeListToArray from './nodeListToArray'
import parse from 'inline-style-parser'
import isEqual from 'lodash.isequal'
import pick from 'lodash.pick'
import isEmpty from 'lodash.isempty'

import { swap } from '.'

const toOrigin = {
  source: (val) => val,
  inverse: (val) => val,
}

const toBold = {
  source: (val) => {
    return val ? 'bold' : 'normal'
  },
  inverse: (val) => {
    if (val == 'normal') return false
    else if (val == 'bold') return true
    return false
  },
}

const toItalic = {
  source: (val) => {
    return val ? 'italic' : 'normal'
  },
  inverse: (val) => {
    if (val == 'normal') return false
    else if (val == 'italic') return true
    return false
  },
}

const toUnderline = {
  source: (val) => {
    return val ? 'underline' : 'none'
  },
  inverse: (val) => {
    if (val == 'none') return false
    else if (val == 'underline') return true
    return false
  },
}

const keyStyleMapper = {
  BOLD: 'font-weight',
  ITALIC: 'font-style',
  UNDERLINE: 'text-decoration',
  COLOR: 'color',
  FONT_SIZE: 'font-size',
  FONT_FAMILY: 'font-family',
  LINE_HEIGHT: 'line-height',
  LETTER_SPACE: 'letter-spacing',
  CASE: 'text-transform',
}

const valueStyleMapper = {
  BOLD: toBold,
  ITALIC: toItalic,
  UNDERLINE: toUnderline,
  COLOR: toOrigin,
  FONT_SIZE: toOrigin,
  FONT_FAMILY: toOrigin,
  LINE_HEIGHT: toOrigin,
  LETTER_SPACE: toOrigin,
  CASE: toOrigin,
}

class StyleManager {
  editor: grapesjs.Editor
  selectedElement: HTMLElement
  range: Range | null
  doc: Document | undefined
  constructor({ editor, selectedElement }) {
    this.editor = editor
    this.selectedElement = selectedElement
    this.range = null
    this.doc = getIframe().contentWindow?.document
  }

  updateRange(range: Range): void {
    this.range = range
  }

  setInlineStyle(key, value) {
    const styleKey = keyStyleMapper[key]
    const styleValue = valueStyleMapper[key].source(value)
    if (!styleKey || !styleValue) return console.error(`Invalid style ${key} ${value}`)
    console.log(styleKey, styleValue)
    const rangeContents = this.range?.cloneContents()
    const parent = this.range?.commonAncestorContainer.parentNode
    let span
    if (
      parent?.tagName?.toLowerCase() === 'span' &&
      parent?.classList.contains('willy-inline-style') &&
      parent?.firstChild?.textContent === rangeContents?.textContent
    ) {
      parent.style[styleKey] = styleValue
    } else {
      span = this._createElement(styleKey, styleValue)
      span.appendChild(
        rangeContents.textContent.length > 0
          ? this.range.extractContents()
          : document.createTextNode('\u200b'),
      )
      span.focus()
      this.range.insertNode(span)
    }
    // if (rangeContents.textContent.length > 0) this._cleanEmptyChild()
    this._updateChildrenStyle(span || parent, styleKey)
    // this._removeSpanElementWhenNoStylingApplied()
    // this._mergeInlineElementsWhenStylesAreSame()
  }

  getAllInlineStyle() {
    try {
      let mergedObject = {}
      const ancestorsCss = []
      let currentParent = this.range?.commonAncestorContainer.parentElement
      let cssText = parse(currentParent?.style.cssText)
      ancestorsCss.push(...cssText)
      while (currentParent?.classList.contains('willy-inline-style')) {
        currentParent = currentParent.parentElement
        cssText = parse(currentParent?.style.cssText).filter(
          (css) => !ancestorsCss.find((innercss) => innercss.property == css.property),
        )
        ancestorsCss.push(...cssText)
      }
      const objects = ancestorsCss.map((style) => {
        return {
          [style.property]: style.value,
        }
      })
      objects.forEach((object) => {
        mergedObject = Object.assign(mergedObject, object)
      })
      const swapedMapper = swap(keyStyleMapper)
      const styles = {}
      Object.keys(mergedObject).forEach((key) => {
        const value = mergedObject[key]
        const newKey = swapedMapper[key]
        styles[newKey] = valueStyleMapper[newKey].inverse(value)
      })
      return !isEmpty(styles) ? styles : null
    } catch {
      return null
    }
  }

  _createElement(key, value) {
    const span = document.createElement('span')
    span.classList.add('willy-inline-style')
    span.style[key] = value
    return span
  }

  _cleanEmptyChild() {
    const allStyledChildren = nodeListToArray(
      this.selectedElement?.querySelectorAll('.willy-inline-style'),
    )
    allStyledChildren
      .filter((child) => !child.innerHTML || child.innerHTML?.length == 0 || child.innerHTML == '')
      .forEach((child) => child.remove())
  }

  _updateChildrenStyle(span: HTMLElement, key) {
    const allStyledChildren = nodeListToArray(span.getElementsByTagName('*'))
    allStyledChildren
      .filter((child) => child.style[key])
      .forEach((child) => {
        child.style[key] = 'inherit'
      })
  }

  _removeSpanElementWhenNoStylingApplied() {
    const allStyledChildren = nodeListToArray(
      this.selectedElement?.querySelectorAll('.willy-inline-style'),
    )
    allStyledChildren
      .filter((child) => {
        try {
          const styles = parse(child.style.cssText)
          return styles.every((style) => style.value == 'inherit')
        } catch {
          return true
        }
      })
      .forEach((child) => {
        child.outerHTML = child.innerHTML
      })
  }

  _mergeInlineElementsWhenStylesAreSame() {
    const allStyledChildren = nodeListToArray(
      this.selectedElement?.querySelectorAll('.willy-inline-style'),
    )
    allStyledChildren
      .filter((child) => child.parentElement?.classList.contains('willy-inline-style'))
      .filter((child) => {
        try {
          const childrenStyle = parse(child.style.cssText).map((style) =>
            pick(style, ['property', 'value']),
          )
          const parentStyle = parse(child?.parentElement?.style.cssText).map((style) =>
            pick(style, ['property', 'value']),
          )
          const equal = isEqual(childrenStyle, parentStyle)
          return equal
        } catch {
          return false
        }
      })
      .forEach((child) => {
        child.outerHTML = child.innerHTML
      })
  }

  _createFakeCaret() {
    const span = document.createElement('span')
    span.style.display = 'inline-block'
    span.style.fontSize = 'inherit'
    span.style.height = 'fit-content'
    span.style.width = 'fit-content'

    span.style.animation = 'blink 1s steps(5, start) infinite'
    span.textContent = '|'
    return span
  }
}

export default StyleManager
