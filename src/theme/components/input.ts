export const Input = {
  parts: ['field'],
  baseStyle: {
    field: {
      outline: 0,
      boxShadow: 0,
      border: '2.5px solid border.input',
      borderWidth: 2,
    },
  },

  variants: {
    flushed: {
      field: {
        border: 'none',
        borderBottomWidth: 2,
        boxShadow: 'none',
        _focus: {
          boxShadow: 'none',
          borderColor: 'theme.primary',
        },
        _active: {
          boxShadow: 'none',
          borderColor: 'theme.primary',
        },
        _disabled: {
          opacity: 0.6,
          cursor: 'default',
        },
      },
      addon: {
        boxShadow: 'none',
        borderColor: 'theme.primary',
      },
    },

    outline: {
      field: {
        bg: 'background.primary',
        _focus: {
          borderColor: 'theme.primary',
          boxShadow: `0px 1px 3px 0px #eee`,
        },
        _active: {
          borderColor: 'theme.primary',
          boxShadow: `0px 1px 0px 0px #ddd`,
        },
        _disabled: {
          opacity: 0.6,
          cursor: 'default',
        },
        _hover: {
          boxShadow: `0px 1px 0px 0px #ddd`,
        },
      },
      addon: {
        borderColor: 'theme.primary',
        boxShadow: `0px 1px 0px 0px #ddd`,
      },
    },
  },

  sizes: {
    md: {
      field: {
        borderRadius: 0,
        h: '40px',
      },
      addon: {
        borderRadius: 0,
        h: '40px',
      },
    },
  },

  defaultProps: {
    variant: 'outline',
    size: 'md',
  },
};
