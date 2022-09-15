import { atom } from 'recoil'
import grapesjs from 'grapesjs'
export const editorState = atom<grapesjs.Editor>({
  key: 'EDITOR',
  default: {},
})
