import useResizeObserver from '@react-hook/resize-observer'
import useIntersectionObserver from '@react-hook/intersection-observer'
import { useEffect, useLayoutEffect, useState } from 'react'

export const useSize = (target) => {
  const [size, setSize] = useState()

  useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect())
  }, [target])

  useResizeObserver(target, (entry) => setSize(entry.contentRect))
  return size
}

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
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

export const usePositionCorrection = (ref, { leftPos, topPos }) => {
  const intersectionData = useIntersectionObserver(ref)
  const [position, setPosition] = useState({
    top: topPos,
    left: leftPos,
  })
  useEffect(() => {
    setPosition({ top: topPos, left: leftPos })
  }, [leftPos, topPos])

  useEffect(() => {
    if (intersectionData.boundingClientRect?.height > intersectionData.intersectionRect?.height) {
      const diff =
        intersectionData.boundingClientRect?.height - intersectionData.intersectionRect?.height
      const isElementOnTheBottomOfWindow =
        intersectionData.rootBounds?.bottom < intersectionData.boundingClientRect?.bottom
      const newTop = isElementOnTheBottomOfWindow ? position.top - diff : position.top + diff
      setPosition((position) => {
        return {
          ...position,
          top: newTop,
        }
      })
    }

    if (intersectionData.boundingClientRect?.width > intersectionData.intersectionRect?.width) {
      const diff =
        intersectionData.boundingClientRect?.width - intersectionData.intersectionRect?.width
      const isElementOnLeftSideOfWindow =
        intersectionData.rootBounds?.right < intersectionData.boundingClientRect?.right
      const newLeft = isElementOnLeftSideOfWindow ? position.left - diff : position.left + diff
      setPosition((position) => {
        return {
          ...position,
          left: newLeft,
        }
      })
    }
  }, [intersectionData])
  return position
}

export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
