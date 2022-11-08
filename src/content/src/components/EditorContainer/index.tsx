import { useEffect, useState } from 'react'
import { useInspector } from '../Inspector'
import EditableElement from '../Editor'
import { inspectingState } from '../../atoms/inspect.state'
import { useRecoilState, useRecoilValue } from 'recoil'
import { editorState } from '../../atoms/editor.state'

export default function EditorContainer() {
  const [isInspecting, setInspectionState] = useRecoilState(inspectingState)
  const [isEditorOpen, setEditorOpen] = useRecoilState(editorState)

  const [elementPosition, setElementPosition] = useState({
    top: '0px',
    left: '0px',
  })

  const [shouldDisplayElement, setShouldDisplayElement] = useState(false)
  const [targetElement, setTargetElement] = useState()

  const handleClickEvent = (element: HTMLElement) => {
    setElementPosition({
      top: element.getClientRects()[0].top + 'px',
      left: element.getClientRects()[0].left + 'px',
    })
    document.body.style.overflow = 'hidden'
    setTargetElement(element)
    setShouldDisplayElement(true)
    setEditorOpen(true)
    setEditorOpen(true)
    setInspectionState(false)
  }

  const { startInspect } = useInspector(handleClickEvent)

  useEffect(() => {
    if (isInspecting) {
      startInspect()
    }
  }, [isInspecting])

  useEffect(() => {
    setShouldDisplayElement(isEditorOpen)
  }, [isEditorOpen])

  const editorConfig = {
    width: 250,
    ...elementPosition,
  }

  return (
    <div
      style={{
        zIndex: 99999999999,
        display: shouldDisplayElement ? 'block' : 'none',
      }}
    >
      {shouldDisplayElement && <EditableElement editorConfig={editorConfig} />}
    </div>
  )
}
