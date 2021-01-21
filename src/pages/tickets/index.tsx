import { Box, Stack, Text } from '@chakra-ui/react';
import Graphic from 'components/Layout/Graphic';
import UserListComponent from 'components/Layout/UserList';
import React from 'react';

const TicketsPage: React.FC = () => {
  return (
    <Stack flex="1" p="20px">
      <Stack direction="row" spacing="20px">
        <Box flex="1" bg="white" p="15px 20px">
          <Text fontSize="20px" fontWeight="bold">
            Mensal
          </Text>
          <Graphic />
        </Box>

        <Box flex="1" bg="white" p="15px 20px">
          <Text fontSize="20px" fontWeight="bold">
            Total
          </Text>
          <Graphic />
        </Box>
      </Stack>

      <Stack direction="row" spacing="20px" pt="10px">
        <Stack direction="row" flex="1">
          <Box flex="1">
            <UserListComponent title="Em andamento" content={[0, 1, 2, 3, 4]} />
          </Box>
          <Box flex="1">
            <UserListComponent
              title="Aberto recentemente"
              content={[0, 1, 2, 3, 4]}
            />
          </Box>
        </Stack>

        <Stack direction="row" flex="1">
          <Box flex="1">
            <UserListComponent title="Finalizados" content={[0, 1, 2, 3, 4]} />
          </Box>
          <Box flex="1">
            <UserListComponent
              title="Não solucionados"
              content={[0, 1, 2, 3, 4]}
            />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TicketsPage;
