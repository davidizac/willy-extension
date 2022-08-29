export default {
  variants: {
    alwaysOpen: {
      parts: ['dialog, dialogContainer'],
      dialog: {
        pointerEvents: 'auto',
      },
      dialogContainer: {
        pointerEvents: 'none',
      },
    },
  },
}
