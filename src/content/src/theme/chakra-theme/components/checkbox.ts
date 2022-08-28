import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const baseStyle = (props: StyleFunctionProps) => ({
  label: {
    color: 'muted',
    fontWeight: 'medium',
  },
  control: {
    bg: mode('white', 'lightCyan.800')(props),
    borderRadius: 'base',
  },
})

const sizes = {
  md: {
    label: {
      fontSize: 'sm',
    },
  },
}

const defaultProps = {
  colorScheme: 'mellowApricot',
}

export default {
  baseStyle,
  sizes,
  defaultProps,
}
