export const Button = {
  baseStyle: {
    fontWeight: '700',
    borderRadius: 0,
  },

  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'primary.500',
    },
    solid: {
      bg: 'primary.500',
      color: 'white',
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'solid',
    colorScheme: 'primary',
  },
};
