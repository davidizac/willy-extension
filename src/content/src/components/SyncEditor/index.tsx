import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { boxSettingState } from '../../atoms/box-settings.state'
import { preparePayload } from '../../utils/prepare-payload'
import { sendToIframe } from '../../utils/send-to-iframe'

export default function SyncEditor({ children }) {
  const boxSetting = useRecoilValue(boxSettingState)

  useEffect(() => {
    const iframeRef = document
      .getElementById('willy-builder')
      .children[1].shadowRoot.getElementById('willy-wysiwyg')

    if (!iframeRef) return

    const payload = preparePayload(boxSetting)
    sendToIframe(payload, iframeRef)
  }, [boxSetting])

  return <>{children}</>
}
