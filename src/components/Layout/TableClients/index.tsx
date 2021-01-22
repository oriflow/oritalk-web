import {
  Avatar,
  Box,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Button,
  Image,
} from '@chakra-ui/react';
import user from 'assets/png/user.png';
import dropDown from 'assets/svg/drop.svg';
import { useRoute } from 'hooks/useRoute';
import React from 'react';

import { status } from './status';

const TableClients: React.FC = () => {
  const { push } = useRoute();

  const Rows = [
    { name: 'Nome' },
    { name: 'CPF' },
    { name: 'Contrato ativo' },
    { name: 'Unidade' },
    { name: 'Último ticket' },
    { name: 'Status' },
    { name: '' },
  ];

  return (
    <Stack flex="1">
      <Table variant="unstyled">
        <Thead color="grey" borderBottom="1px solid #2b2b2b">
          <Tr>
            {Rows.map(item => (
              <Th fontWeight="500" textTransform="initial">
                {!!item.name && (
                  <Stack direction="row" cursor="pointer">
                    <Text>{item.name}</Text>
                    <Image src={dropDown} />
                  </Stack>
                )}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Box h="6px" />
        <Tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
            <>
              <Tr bg="white" fontSize="14px" p="0">
                <Td>
                  <Stack direction="row" alignItems="center">
                    <Avatar src={user} w="30px" h="30px" />
                    <Text pl="10px">Eduardo Souza Martins</Text>
                  </Stack>
                </Td>
                <Td>031.547.961-88</Td>
                <Td>#23789743 - Just Recupera</Td>
                <Td>Morumbi</Td>
                <Td>#92830799</Td>
                <Td>
                  <Box>
                    {item === 2 || item === 3 ? status[item] : status[1]}
                  </Box>
                </Td>
                <Td>
                  <Button
                    onClick={() => {
                      push('/profile');
                    }}
                    w="130px"
                    fontSize="14px"
                    variant="outline">
                    Ver perfil
                  </Button>
                </Td>
              </Tr>
              <Box h="8px" />
            </>
          ))}
        </Tbody>
      </Table>
    </Stack>
  );
};

export default TableClients;
