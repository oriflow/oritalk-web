import { Avatar, Box, Button, Stack, Text } from '@chakra-ui/react';
import user from 'assets/png/user.png';
import { ReactComponent as Teste1 } from 'assets/svg/testes/01.svg';
import { ReactComponent as Teste2 } from 'assets/svg/testes/02.svg';
import ExpandableTable from 'components/Layout/ExpandableTable';
import React from 'react';
import { FiDownload } from 'react-icons/fi';

import { Columns, dataFake } from './fake';

const CallContracts: React.FC = () => {
  return (
    <Stack flex="1" bg="white" p="50px" overflow="auto">
      <Stack direction="row" justifyContent="space-between">
        <Box>
          <Text color="text.primary" fontSize="18px" mb="48px">
            Ticket #92830799
          </Text>
          <Stack direction="row" spacing="20px" mb="40px">
            <Avatar w="56px" h="56px" src={user} />
            <Box>
              <Text fontSize="18px" fontWeight="700" mb="4px">
                Eduardo Souza Martins
              </Text>
              <Text fontSize="12px">CPF: 233.434.454-32</Text>
              <Button mt="16px" size="sm" variant="outline">
                Ver perfil
              </Button>
            </Box>
          </Stack>
        </Box>
        <Stack direction="row">
          <Box border="1px solid #ddd">
            <Teste1 />
          </Box>
          <Box border="1px solid #ddd">
            <Teste2 />
          </Box>
        </Stack>
      </Stack>

      <Box h="40px" />

      <ExpandableTable
        columns={[
          ...Columns,
          {
            title: 'Ações',
            accessor: 'actions',
            isNumeric: true,
            Cell: (
              <Button color="black" leftIcon={<FiDownload />} variant="link">
                Termos de cancelamento
              </Button>
            ),
          },
        ]}
        data={dataFake}
      />
    </Stack>
  );
};

export default CallContracts;
