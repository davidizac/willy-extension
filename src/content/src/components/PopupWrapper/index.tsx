import { useEffect, useRef, useState } from 'react'
import { usePositionCorrection } from '../../hooks'

export const PopupWrapper = ({ children, left }) => {
  const ref = useRef(null)

  const [popupPosition, setPopupPosition] = useState({
    top: 60,
    left,
  })

  const { top, left: newLeft } = usePositionCorrection(ref, {
    leftPos: popupPosition.left,
    topPos: popupPosition.top,
  })

  useEffect(() => {
    if (!ref || !ref.current) return
    // We dont take the new corrected top position from the hook. The popup will be placed at the top side of the toolbar element.
    const isTopCorrected = top !== popupPosition.top
    const newTop = isTopCorrected && -(ref.current.getClientRects()[0].height + 10)
    setPopupPosition({
      left: newLeft,
      top: newTop || popupPosition.top,
    })
  }, [top, newLeft])

  return (
    <div
      ref={ref}
      style={{ position: 'absolute', top: popupPosition.top, left: popupPosition.left, zIndex: 2 }}
    >
      {children}
    </div>
  )
}
