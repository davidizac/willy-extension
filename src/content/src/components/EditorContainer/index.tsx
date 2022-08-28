import { useEffect, useState } from 'react'
import { useInspector } from '../Inspector'
import EditableElement from '../Editor'
import { inspectingState } from '../../atoms/inspect.state'
import { useRecoilValue } from 'recoil'

export default function EditorContainer() {
  const [elementPosition, setElementPosition] = useState({
    top: '0px',
    left: '0px',
  })

  const [shouldDisplayElement, setShouldDisplayElement] = useState(false)

  const handleClickEvent = (element: HTMLElement) => {
    setElementPosition({
      top: element.getClientRects()[0].top + 'px',
      left: element.getClientRects()[0].left + 'px',
    })
    document.body.style.overflow = 'hidden'
    setShouldDisplayElement(true)
  }

  const isInspecting = useRecoilValue(inspectingState)
  const { startInspect } = useInspector(handleClickEvent)

  useEffect(() => {
    if (isInspecting) {
      startInspect()
    }
  }, [isInspecting])

  const editorConfig = {
    width: 250,
  }

  return (
    <div
      style={{
        position: 'absolute',
        zIndex: 99999999999,
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        display: shouldDisplayElement ? 'block' : 'none',
      }}
    >
      {shouldDisplayElement && (
        <EditableElement
          editorConfig={editorConfig}
          top={elementPosition.top}
          left={elementPosition.left}
        />
      )}
    </div>
  )
}
