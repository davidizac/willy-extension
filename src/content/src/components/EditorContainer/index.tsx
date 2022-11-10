import { useEffect, useRef, useState } from 'react'
import { useInspector } from '../Inspector'
import { inspectingState } from '../../atoms/inspect.state'
import { useRecoilState } from 'recoil'
import { editingState } from '../../atoms/editing.state'
import { boxSettingState } from '../../atoms/box-settings.state'
import generateCssSelector from '../../utils/generate-css-selector'

export default function EditorContainer() {
  const [isInspecting, setInspectionState] = useRecoilState(inspectingState)
  const [editing, setEditing] = useRecoilState(editingState)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  const [, setBoxSetting] = useRecoilState(boxSettingState)
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null)

  const handleClickEvent = (targetElement: HTMLElement) => {
    document.body.style.overflow = 'hidden'
    setEditing(true)
    setInspectionState(false)
    setTargetElement(targetElement)
  }

  const { startInspect } = useInspector(handleClickEvent)

  useEffect(() => {
    if (!iframeRef || !iframeRef.current) return
    iframeRef.current.addEventListener('load', function () {
      const targetSelector = generateCssSelector(targetElement)
      setBoxSetting((setting) => {
        return {
          ...setting,
          targetSelector,
          targetElement,
        }
      })
    })
  }, [editing])

  useEffect(() => {
    if (isInspecting) {
      startInspect()
    }
  }, [isInspecting])

  return (
    <div
      style={{
        zIndex: 99999999999,
        display: editing ? 'block' : 'none',
      }}
    >
      {editing && (
        <div
          id='willy'
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'fixed',
          }}
        >
          <iframe
            id='willy-wysiwyg'
            ref={iframeRef}
            style={{ border: 'none', width: '100%', height: '100%' }}
            src='http://localhost:3000/'
          ></iframe>
        </div>
      )}
    </div>
  )
}
