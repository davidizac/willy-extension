import { atom } from 'recoil'

export const selectedElementState = atom<HTMLElement | null>({
  key: 'SELECTED_ELEMENT',
  default: null,
})
