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

    error: {
      container: {
        bg: 'feedback_liquid.primary',
        borderRadius: 2,
        color: 'white',
      },
    },

    success: {
      container: {
        bg: 'feedback_solid.primary',
        borderRadius: 2,
        color: 'white',
      },
    },
  },

  defaultProps: {
    variant: 'gas',
  },
};
