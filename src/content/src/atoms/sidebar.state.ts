import { atom } from 'recoil'

export const sideBarState = atom<boolean>({
  key: 'IS_OPEN',
  default: false,
})
