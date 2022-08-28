import { mode, StyleFunctionProps, transparentize } from '@chakra-ui/theme-tools'

const variants = {
  outline: (props: StyleFunctionProps) => ({
    field: {
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
    },
    addon: {
      borderRadius: 'lg',
      bg: mode('lightCyan.50', 'lightCyan.700')(props),
    },
  }),
  'outline-on-accent': (props: StyleFunctionProps) => ({
    field: {
      bg: 'white',
      borderRadius: 'lg',
      color: 'lightCyan.900',
      borderWidth: '1px',
      borderColor: 'mellowApricot.50',
      _placeholder: {
        color: 'lightCyan.500',
      },
      _hover: {
        borderColor: 'mellowApricot.100',
      },
      _focus: {
        borderColor: 'mellowApricot.200',
        boxShadow: `0px 0px 0px 1px ${transparentize(`mellowApricot.200`, 1.0)(props.theme)}`,
      },
    },
  }),
  filled: (props: StyleFunctionProps) => {
    if (props.colorScheme === 'lightCyan') {
      return {
        field: {
          bg: mode('white', 'lightCyan.800')(props),
          _hover: {
            borderColor: mode('lightCyan.200', 'lightCyan.700')(props),
            bg: mode('white', 'lightCyan.700')(props),
          },
          _focus: {
            borderColor: 'accent',
            bg: mode('white', 'lightCyan.800')(props),
          },
        },
      }
    }
    return {
      field: {
        bg: 'bg-accent-subtle',
        color: 'on-accent',
        _placeholder: {
          color: 'on-accent',
        },
        _hover: {
          borderColor: 'mellowApricot.400',
          bg: 'bg-accent-subtle',
        },
        _focus: {
          bg: 'bg-accent-subtle',
          borderColor: 'mellowApricot.300',
        },
      },
    }
  },
}

const sizes = {
  lg: {
    field: {
      fontSize: 'md',
      borderRadius: 'lg',
    },
  },
}

export default {
  variants,
  sizes,
  defaultProps: {
    colorScheme: 'lightCyan',
  },
}
