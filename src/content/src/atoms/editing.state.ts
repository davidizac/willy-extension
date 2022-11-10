import { atom } from 'recoil'

export const editingState = atom<boolean>({
  key: 'EDITING',
  default: false,
})
