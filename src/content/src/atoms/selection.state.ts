import { atom } from 'recoil'

export const selectionState = atom<Range | null>({
  key: 'SELECTION',
  default: null,
})
