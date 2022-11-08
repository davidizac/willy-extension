import { atom } from 'recoil'

export const editorState = atom<boolean>({
  key: 'IS_OPEN',
  default: false,
})
