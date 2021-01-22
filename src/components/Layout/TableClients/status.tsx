import { Box } from '@chakra-ui/react';
import React from 'react';

export const status = {
  1: (
    <Box p="2px 6px" bg="#5e5e5e" color="white" w="60px" borderRadius="3px">
      Aberto
    </Box>
  ),
  2: (
    <Box p="2px 6px" bg="#f4b42b" w="110px" borderRadius="3px">
      Em andamento
    </Box>
  ),
  3: (
    <Box p="2px 6px" bg="#008a00" color="white" w="80px" borderRadius="3px">
      Finalizado
    </Box>
  ),
};
