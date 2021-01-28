import { Box, Text } from '@chakra-ui/react';
import React from 'react';

import UserDetails from '../../components/userdetails';

const ClientContracts: React.FC = () => {
  return (
    <Box>
      <UserDetails />
      <Text>Contratos</Text>
    </Box>
  );
};

export default ClientContracts;
