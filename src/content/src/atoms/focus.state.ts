import { atom } from 'recoil'

export const focusingState = atom<boolean>({
  key: 'FOCUSING',
  default: false,
})
