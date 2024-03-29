import type { Fiber } from 'react-reconciler'

export interface CodeInfo {
  lineNumber: string
  columnNumber: string
  relativePath: string
}

export const getElementCodeInfo = (element: HTMLElement): CodeInfo | undefined => {
  if (!element?.dataset) return undefined

  const { dataset } = element

  // data attributes auto create by loader in webpack plugin `inspector-loader`
  const lineNumber = dataset.inspectorLine
  const columnNumber = dataset.inspectorColumn
  const relativePath = dataset.inspectorRelativePath

  if (lineNumber && columnNumber && relativePath) {
    return {
      lineNumber,
      columnNumber,
      relativePath,
    }
  }

  if (element.parentElement) {
    return getElementCodeInfo(element.parentElement)
  }

  return undefined
}

/**
 * https://stackoverflow.com/questions/29321742/react-getting-a-component-from-a-dom-element-for-debugging
 */
export const getElementFiber = (element: HTMLElement): Fiber | null => {
  const fiberKey = Object.keys(element).find((key) => key.startsWith('__reactInternalInstance$'))

  if (fiberKey) {
    return element[fiberKey] as Fiber
  }

  return null
}

export const debugToolNameRegex =
  /^(.*?\.Provider|.*?\.Consumer|Anonymous|Trigger|Tooltip|_.*|[a-z].*)$/

export const getSuitableFiber = (baseFiber?: Fiber): Fiber | null => {
  let suitableFiber = null
  let compFiber = baseFiber
  while (compFiber) {
    const name = compFiber._currentElement?.type
    if (name && !debugToolNameRegex.test(name)) {
      suitableFiber = compFiber._currentElement
      break
    }
    compFiber = compFiber?._currentElement?._owner
  }
  return suitableFiber
}

export const getFiberName = (fiber?: Fiber): string | undefined => {
  const fiberType = fiber?.type
  let displayName: string | undefined

  // The displayName property is not guaranteed to be a string.
  // It's only safe to use for our purposes if it's a string.
  // github.com/facebook/react-devtools/issues/803
  //
  // https://github.com/facebook/react/blob/v17.0.0/packages/react-devtools-shared/src/utils.js#L90-L112
  if (typeof fiberType?.displayName === 'string') {
    displayName = fiberType.displayName
  } else if (typeof fiberType?.name === 'string') {
    displayName = fiberType.name
  }

  return displayName
}

export const getElementInspect = (
  element: HTMLElement,
  sourcePath?: string,
): {
  fiber?: Fiber
  name?: string
  title: string
} => {
  const fiber = getSuitableFiber(getElementFiber(element))
  const fiberName = getFiberName(fiber)
  const nodeName = element.nodeName.toLowerCase()

  const elementName = fiberName ? fiberName : nodeName

  const title = sourcePath ? `<${elementName}>` : `${nodeName} in <${fiberName}>`

  return {
    fiber,
    name: fiberName,
    title,
  }
}
