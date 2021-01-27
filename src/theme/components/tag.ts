export const Tag = {
  variants: {
    solid: {
      container: {
        bg: 'background.intermediate',
        borderRadius: 2,
      },
    },

    gas: {
      container: {
        bg: 'feedback_gas.primary',
        borderRadius: 2,
      },
    },
  },

  defaultProps: {
    variant: 'gas',
  },
};
