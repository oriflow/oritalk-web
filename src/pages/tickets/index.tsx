import { Avatar, Box, Button, Stack, Text } from '@chakra-ui/react';
import user from 'assets/png/user.png';
import Graphic from 'components/Layout/Graphic';
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
          <Box flex="1" bg="white" p="15px 20px">
            <Stack direction="row" justifyContent="space-between">
              <Text fontSize="16px" fontWeight="bold">
                Em andamento
              </Text>
              <Button variant="link">Ver todos {`>`}</Button>
            </Stack>
            <Box mt="10px">
              {[0, 1, 2, 3, 4, 5].map(() => (
                <Stack
                  direction="row"
                  fontSize="13px"
                  borderTop="1px solid #eee"
                  p="10px 0px"
                  alignItems="center">
                  <Avatar src={user} w="28px" h="28px" />
                  <Text flex="1">Eduardo Souza</Text>
                  <Text fontSize="12px">16/10/2020</Text>
                </Stack>
              ))}
            </Box>
          </Box>

          <Box flex="1" bg="white" p="15px 20px">
            <Stack direction="row" justifyContent="space-between">
              <Text fontSize="16px" fontWeight="bold">
                Aberto recentemente
              </Text>
              <Button variant="link">Ver todos {`>`}</Button>
            </Stack>
            <Box mt="10px">
              {[0, 1, 2, 3, 4, 5].map(() => (
                <Stack
                  direction="row"
                  fontSize="13px"
                  borderTop="1px solid #eee"
                  p="10px 0px"
                  alignItems="center">
                  <Avatar src={user} w="28px" h="28px" />
                  <Text flex="1">Eduardo Souza</Text>
                  <Text fontSize="12px">16/10/2020</Text>
                </Stack>
              ))}
            </Box>
          </Box>
        </Stack>

        <Stack direction="row" flex="1">
          <Box flex="1" bg="white" p="15px 20px">
            <Stack direction="row" justifyContent="space-between">
              <Text fontSize="16px" fontWeight="bold">
                Finalizados
              </Text>
              <Button variant="link">Ver todos {`>`}</Button>
            </Stack>
            <Box mt="10px">
              {[0, 1, 2, 3, 4, 5].map(() => (
                <Stack
                  direction="row"
                  fontSize="13px"
                  borderTop="1px solid #eee"
                  p="10px 0px"
                  alignItems="center">
                  <Avatar src={user} w="28px" h="28px" />
                  <Text flex="1">Eduardo Souza</Text>
                  <Text fontSize="12px">16/10/2020</Text>
                </Stack>
              ))}
            </Box>
          </Box>

          <Box flex="1" bg="white" p="15px 20px">
            <Stack direction="row" justifyContent="space-between">
              <Text fontSize="16px" fontWeight="bold">
                Não solucionados
              </Text>
              <Button variant="link">Ver todos {`>`}</Button>
            </Stack>
            <Box mt="10px">
              {[0, 1, 2, 3, 4, 5].map(() => (
                <Stack
                  direction="row"
                  fontSize="13px"
                  borderTop="1px solid #eee"
                  p="10px 0px"
                  alignItems="center">
                  <Avatar src={user} w="28px" h="28px" />
                  <Text flex="1">Eduardo Souza</Text>
                  <Text fontSize="12px">16/10/2020</Text>
                </Stack>
              ))}
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TicketsPage;
