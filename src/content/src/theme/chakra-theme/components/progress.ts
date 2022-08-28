const baseStyle = {
  track: {
    borderRadius: 'base',
  },
}

const variants = {
  solid: {
    track: {
      bg: 'bg-muted',
    },
  },
  'on-accent': {
    track: {
      bg: 'transparent',
    },
    filledTrack: {
      bg: 'mellowApricot.50',
    },
  },
}

const defaultProps = {
  colorScheme: 'mellowApricot',
  variant: 'solid',
}

export default {
  variants,
  baseStyle,
  defaultProps,
}
