import { ChakraProvider } from '@chakra-ui/react';
import { HooksProvider } from 'hooks';
import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from 'routes';
import { theme } from 'theme';

import 'focus-visible/dist/focus-visible';

ReactDOM.render(
  <React.StrictMode>
    <HooksProvider>
      <ChakraProvider theme={theme}>
        <Routes />
      </ChakraProvider>
    </HooksProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
