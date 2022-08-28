import { atom } from 'recoil'

export const inspectingState = atom<boolean>({
  key: 'INSPECTING',
  default: false,
})
