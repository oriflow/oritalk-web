import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

import { colors } from './colors';
import { Button } from './components/button';
import { Input } from './components/input';
import { Tag } from './components/tag';
import { fonts } from './fonts';
import { styles } from './global';

const breakpoints = createBreakpoints({
  sm: '1380px',
  md: '1380px',
  lg: '1920px',
  xl: '1920px',
});

export const theme = extendTheme({
  styles,
  colors,
  ...fonts,
  components: {
    Button,
    Input,
    Tag,
  },
  breakpoints,
});
