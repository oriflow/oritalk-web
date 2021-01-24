import { extendTheme } from '@chakra-ui/react';

import { colors } from './colors';
import { Button } from './components/button';
import { Input } from './components/input';
import { fonts } from './fonts';
import { styles } from './global';

export const theme = extendTheme({
  styles,
  colors,
  ...fonts,
  components: {
    Button,
    Input,
  },
});
