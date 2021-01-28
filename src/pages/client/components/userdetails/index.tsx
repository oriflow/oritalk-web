import { Box, Image, Stack, Tag, Text } from '@chakra-ui/react';
import user from 'assets/png/user.png';
import React from 'react';

const UserDetails: React.FC = () => {
  return (
    <Stack direction="row" align="center" mb="40px" mt="20px">
      <Image w="72px" h="72px" src={user} />
      <Box pl="10px" textColor="text.primary" mr="65px">
        <Text fontSize="20px" fontWeight="700">
          Eduardo Martins
        </Text>
        <Text fontSize="12px">CPF: 089.925.088-24</Text>
      </Box>
      <Stack direction="row" spacing="32px" fontSize="12px">
        <Box>
          <Text mb="4px">Status</Text>
          <Tag>Ativo - com bloqueio de cobrança</Tag>
        </Box>
        <Box>
          <Text mb="4px">Último Ticket</Text>
          <Tag variant="solid">#20201013</Tag>
        </Box>
        <Box>
          <Text mb="4px">Ação</Text>
          <Tag>Reembolsado há 3 meses</Tag>
        </Box>
      </Stack>
    </Stack>
  );
};

export default UserDetails;
