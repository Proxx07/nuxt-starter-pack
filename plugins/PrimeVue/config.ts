import type { PrimeVueConfiguration } from 'primevue/config';
import { definePreset } from '@primeuix/styled';
import Aura from '@primeuix/themes/aura';

const customPreset = definePreset(Aura, {
  primitive: {
    borderRadius: {
      none: '0',
      xs: '.3rem',
      sm: '.5rem',
      md: '.5rem',
      lg: '1rem',
    },
  },

  semantic: {
    formField: {
      paddingX: '.5rem',
      paddingY: '1rem',
    },
  },

  components: {
    button: {
      root: {
        paddingX: '10rem',
        paddingY: '10rem',
      },
    },

  },
});

export const options: PrimeVueConfiguration = {
  ripple: true,
  theme: {
    preset: customPreset,
    options: {
      darkModeSelector: '.app-dark',
    },
  },
};
