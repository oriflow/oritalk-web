import { Box, Stack, Text } from '@chakra-ui/react';
import React from 'react';

// import { Container } from './styles';

const Graphic: React.FC = () => {
  return (
    <Box>
      <Stack
        direction="row"
        fontSize="12px"
        textColor="grey"
        mt="20px"
        spacing="8px">
        <Box flex="2">
          <Text>17%</Text>
          <Box h="8px" flex="1" bg="grey" />
        </Box>
        <Box flex="5">
          <Text>47%</Text>
          <Box h="8px" flex="1" bg="orange.300" />
        </Box>
        <Box flex="3">
          <Text>30%</Text>
          <Box h="8px" flex="1" bg="green.500" />
        </Box>
        <Box flex="1">
          <Text>9%</Text>
          <Box h="8px" flex="1" bg="red.400" />
        </Box>
      </Stack>

      <Stack direction="row" fontSize="14px" spacing="30px" mt="20px">
        <Stack direction="row" alignItems="center">
          <Box h="8px" bg="red.400" w="8px" borderRadius="40px" />
          <Text>Abertos</Text>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Box h="8px" bg="orange.300" w="8px" borderRadius="40px" />
          <Text>Em andamento</Text>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Box h="8px" bg="green.500" w="8px" borderRadius="40px" />
          <Text>Finalizados</Text>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Box h="8px" bg="red.400" w="8px" borderRadius="40px" />
          <Text>Sem solução</Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Graphic;
