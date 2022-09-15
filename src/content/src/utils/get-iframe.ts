export default function getIframe(): HTMLIFrameElement {
  return document
    .getElementsByTagName('willy-container')[0]
    .children[1].shadowRoot.children[0].getElementsByClassName('gjs-frame')[0]
}
