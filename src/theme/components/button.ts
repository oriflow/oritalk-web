export const Button = {
  baseStyle: {
    fontWeight: '700',
    borderRadius: 0,
  },

  variants: {
    outline: {
      border: '1px solid',
      borderColor: 'primary.500',
      borderRadius: 3,
      textColor: 'primary.500',
      fontWeight: '500',
      padding: '0px 15px',
      height: '38px',
      _active: {
        textColor: 'white',
      },
    },
    solid: {
      bg: 'primary.500',
      color: 'white',
    },
    link: {
      fontSize: 12,
    },
  },

  defaultProps: {
    colorScheme: 'primary',
    size: 'md',
    variant: 'solid',
  },
};
