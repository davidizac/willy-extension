import { mode, StyleFunctionProps, transparentize } from '@chakra-ui/theme-tools'

const variants = {
  outline: (props: StyleFunctionProps) => ({
    borderRadius: 'lg',
    bg: mode('white', 'lightCyan.800')(props),
    _hover: { borderColor: mode('lightCyan.300', 'lightCyan.600')(props) },
    _focus: {
      borderColor: mode('mellowApricot.500', 'mellowApricot.200')(props),
      boxShadow: mode(
        `0px 0px 0px 1px ${transparentize(`mellowApricot.500`, 1.0)(props.theme)}`,
        `0px 0px 0px 1px ${transparentize(`mellowApricot.200`, 1.0)(props.theme)}`,
      )(props),
    },
  }),
}

export default {
  variants,
}
