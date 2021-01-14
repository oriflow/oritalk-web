import { extendTheme } from '@chakra-ui/react';

import { Button } from './components/button';
import { Input } from './components/input';

const fonts = {
  body: 'Nunito Sans, sans-serif',
  heading: 'Nunito Sans, sans-serif',
  mono: 'Nunito Sans, sans-serif',
};

const colors = {
  black: '#2b2b2b',
  text: '#525252',
  title: '#2b2b2b',
  flow: '#7200E5',

  primary: {
    900: '#FF7764',
    800: '#FF7764',
    700: '#D53801',
    600: '#AF0500',
    500: '#FF7764',
    400: '#8A0000',
    300: '#670000',
    100: '#FF7764',
    200: '#FF7764',
  },

  background: {
    100: '#f1f1f1',
    200: '#f2f2f2',
    300: '#f3f3f3',
    400: '#f4f4f4',
    500: '#f5f5f5',
    600: '#f6f6f6',
    700: '#f7f7f7',
  },
};

export const theme = extendTheme({
  colors,
  fonts,
  components: {
    Button,
    Input,
  },
});
