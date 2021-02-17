/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Box, Spinner, Stack, Text } from '@chakra-ui/react';
import { useTickets } from 'hooks/tickets';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import TopMenu from './components/topmenu';
import ChatPage from './pages/chat';
import CallContracts from './pages/contracts';

type Active = 'chat' | 'contracts';

const CallPage: React.FC = () => {
  const state: any = (useLocation().state as any)?.params;
  const { getTicketsByStatus } = useTickets();
  const [active, setActive] = useState<Active>('chat');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const { id } = useParams<any>();
  const [userSelected, setUserSelected] = useState(0);

  const [params] = useState({
    skip: 0,
    take: 5,
    id_site: 1,
    status: true,
    subject: true,
    customer: true,
    ids_status: 1,
  });

  useEffect(() => {
    getAndamento();
    setUserSelected(Number(state.active));
  }, [state]);

  const getAndamento = async () => {
    setLoading(true);
    const data1 = await getTicketsByStatus({ ...params, ids_status: id });
    if (data) setData(data1);
    setLoading(false);
  };

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

          {loading && data.length === 0 && (
            <Stack p="30px" align="center">
              <Spinner color="theme.primary" />
            </Stack>
          )}

          <Stack>
            {data.map((item: any) => (
              <Stack
                onClick={() => setUserSelected(item?.id_ticket)}
                p="10px 8px"
                key={item}
                cursor="pointer"
                direction="row"
                borderBottom="1px solid #eee"
                bg={
                  item?.id_ticket === userSelected
                    ? 'background.light_primary'
                    : 'transparent'
                }
                alignItems="center"
                textColor="text.primary"
                _hover={{
                  bg: 'background.hover',
                }}>
                <Avatar w={['28px', '32px']} h={['28px', '32px']} />
                <Text flex="1" fontSize={['12px', '14px']}>
                  {item?.customer?.name}
                </Text>
                <Text fontSize={['12px', '14px']}>#{item?.id_ticket}</Text>
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
