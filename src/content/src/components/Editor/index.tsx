import { useEffect, useRef } from 'react'

export default function EditableElement({ editorConfig }) {
  const { top, left } = editorConfig
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  useEffect(() => {
    if (!iframeRef) return
    iframeRef.current.addEventListener('load', function () {
      iframeRef.current?.contentWindow?.postMessage(
        {
          target: 'willy',
          payload: {
            top,
            left,
          },
        },
        'http://localhost:3000',
      )
    })
  }, [iframeRef])

  useEffect(() => {
    const handler = (event) => {
      if (event.data.target == 'willy') {
        const message = event.data.payload
        console.log(message)
      }
    }

    window.addEventListener('message', handler)

    // clean up
    return () => window.removeEventListener('message', handler)
  }, []) // empty array => run only once

  return (
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
        ref={iframeRef}
        style={{ border: 'none', width: '100%', height: '100%' }}
        src='http://localhost:3000/'
        allowTransparency={true}
      ></iframe>
    </div>
  )
}
