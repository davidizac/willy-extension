import * as React from 'react'
import useResizeObserver from '@react-hook/resize-observer'

export const useSize = (target) => {
  const [size, setSize] = React.useState()

  React.useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect())
  }, [target])

  useResizeObserver(target, (entry) => setSize(entry.contentRect))
  return size
}

export const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document
      .getElementsByTagName('willy-container')[0]
      .children[1].shadowRoot.addEventListener('mousedown', listener)
    document
      .getElementsByTagName('willy-container')[0]
      .children[1].shadowRoot.addEventListener('touchstart', listener)
    return () => {
      document
        .getElementsByTagName('willy-container')[0]
        .children[1].shadowRoot.removeEventListener('mousedown', listener)
      document
        .getElementsByTagName('willy-container')[0]
        .children[1].shadowRoot.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
