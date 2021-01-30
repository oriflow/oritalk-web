import { Avatar, Box, Stack, Text } from '@chakra-ui/react';
import user from 'assets/png/user.png';
import React, { useState } from 'react';

import TopMenu from './components/topmenu';
import ChatPage from './pages/chat';
import CallContracts from './pages/contracts';

type Active = 'chat' | 'contracts';

const CallPage: React.FC = () => {
  const [active, setActive] = useState<Active>('chat');

  const Pages = {
    chat: ChatPage,
    contracts: CallContracts,
  }[active || 'chat'];

  return (
    <Stack flex="1" overflow="hidden">
      <Stack direction="row" flex="1" h="full" spacing="0">
        <Stack overflow="auto" minW={['300px', '400px']} p="20px">
          <Box mb="10px">
            <Text fontSize="18px" color="text.primary">
              Atendimentos em andamento
            </Text>
          </Box>

          <Stack>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13].map(item => (
              <Stack
                p="10px 8px"
                key={item}
                cursor="pointer"
                direction="row"
                borderBottom="1px solid #eee"
                bg={item === 1 ? 'background.light_primary' : 'transparent'}
                alignItems="center"
                textColor="text.primary"
                _hover={{
                  bg: 'background.hover',
                }}>
                <Avatar src={user} w={['28px', '32px']} h={['28px', '32px']} />
                <Text flex="1" fontSize={['12px', '14px']}>
                  Eduardo Souza
                </Text>
                <Text fontSize={['12px', '14px']}>#92830799</Text>
              </Stack>
            ))}
          </Stack>
        </Stack>
        <Stack spacing="0" flex="1">
          <TopMenu onChange={a => setActive(a)} active={active} />
          <Pages />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CallPage;
