import { atom } from 'recoil'

export const boxSettingState = atom<any>({
  key: 'BOX_SETTINGS',
  default: {
    targetSelector: '',
    targetElement: null,
    placement: 'left',
    paddingX: 20,
    paddingY: 20,
    backgroundColor: '#ffffff',
    width: 250,
    borderRadius: 10,
    spacingX: 0,
    spacingY: 0,
    actionType: 'click',
    behaviorType: '',
  },
})
