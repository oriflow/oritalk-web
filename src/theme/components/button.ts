export const Button = {
  baseStyle: {
    fontWeight: '400',
    borderRadius: 2,
  },

  variants: {
    outline: {
      border: '1px solid',
      borderColor: 'theme.primary',
      borderRadius: 3,
      textColor: 'theme.primary',
      fontSize: 16,
      padding: '0px 6px',
      _hover: {
        bg: 'transparent',
      },
      _active: {
        textColor: 'theme.darkAlt',
        borderColor: 'theme.darkAlt',
        bg: 'transparent',
      },
      _disabled: {
        color: 'text.disabled',
        borderColor: 'text.disabled',
      },
    },

    solid: {
      bg: 'theme.primary',
      color: 'white',
      fontSize: 16,
      _hover: {
        bg: 'theme.secondary',
      },
      _active: {
        bg: 'theme.darkAlt',
      },
      _disabled: {
        bg: 'text.disabled',
      },
    },

    link: {
      color: 'theme.primary',
      _active: {
        color: 'theme.darkAlt',
      },
      _disabled: {
        color: 'text.disabled',
      },
    },
  },

  sizes: {
    default: {
      h: '40px',
    },
    md: {
      h: '32px',
    },
    sm: {
      h: '24px',
    },
  },

  defaultProps: {
    variant: 'solid',
    size: 'default',
  },
};
