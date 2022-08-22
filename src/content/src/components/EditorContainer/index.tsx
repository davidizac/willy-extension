import { useEffect, useState } from 'react'
import { useInspector } from '../Inspector'
import EditableElement from '../EditableElement'

export default function EditorContainer({ shouldStartInspect }) {
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
    setShouldDisplayElement(true)
  }

  const { startInspect } = useInspector(handleClickEvent)
  useEffect(() => {
    if (shouldStartInspect) {
      startInspect()
    }
  }, [shouldStartInspect])

  const editorConfig = {
    width: 250,
  }

  return (
    <div
      style={{
        position: 'absolute',
        zIndex: 0,
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
