import { setupHighlighter } from '../../utils/hightlight'
import {
  getElementCodeInfo,
  getElementInspect,
  CodeInfo,
} from '../../utils/inspect'
import Overlay from './Overlay'

export interface InspectParams {
  /** hover / click event target dom element */
  element: HTMLElement,
  /** nearest named react component fiber for dom element */
  // fiber?: Fiber,
  /** source file line / column / path info for react component */
  codeInfo?: CodeInfo,
  /** react component name for dom element */
  name?: string,
}

export interface InspectStates {
  isInspect: boolean,
}

export type ElementHandler = (params: InspectParams) => void

export interface InspectorProps {
  /**
   * inspector toggle hotkeys
   *
   * supported keys see: https://github.com/jaywcjlove/hotkeys#supported-keys
   */
  keys?: string[],
  onHoverElement?: ElementHandler,
  onClickElement?: ElementHandler,
  /**
   * whether disable click react component to open IDE for view component code
   */
  disableLaunchEditor?: boolean,
}

export function useInspector () {
  const overlayRef = {
    current: new Overlay()
  };

  const handleHoverElement = (element: HTMLElement) => {
    const overlay = overlayRef?.current

    const node = element as Node
    const willContainer = document.getElementById('willy-container') as Node
    if(willContainer.contains(node)) return
    const codeInfo = getElementCodeInfo(element)
    const relativePath = codeInfo?.relativePath
    const { name, title } = getElementInspect(element, relativePath)
    overlay?.inspect?.([element], title, relativePath)
  }

  const startInspect = () => {
    const overlay = new Overlay()

    const stopCallback = setupHighlighter({
      onPointerOver: handleHoverElement
    })

    overlay.setRemoveCallback(stopCallback)

    overlayRef.current = overlay
  }

  const stopInspect = () => {
    overlayRef.current?.remove()
  }

  return {
    startInspect,
    stopInspect
  }
}