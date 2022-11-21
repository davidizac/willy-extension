export const sendToIframe = (payload, iframeRef) => {
  iframeRef.contentWindow?.postMessage(
    {
      target: 'willy',
      payload,
    },
    'http://localhost:8080',
  )
}