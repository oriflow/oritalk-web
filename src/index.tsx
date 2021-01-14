import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from 'routes';
import { theme } from 'theme';

import 'focus-visible/dist/focus-visible';
import 'theme/normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
