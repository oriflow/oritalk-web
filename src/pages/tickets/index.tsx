/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Stack, Text } from '@chakra-ui/react';
import Graphic from 'components/Layout/Graphic';
import UserListComponent from 'components/Layout/UserList';
import { useTickets } from 'hooks/tickets';
import React, { useEffect, useState } from 'react';

const TicketsPage: React.FC = () => {
  const { getTicketsByStatus } = useTickets();
  const [emAndamento, setEmAndamento] = useState([]);
  const [recente, setRecente] = useState([]);
  const [finalizados, setFinalizados] = useState([]);
  const [nãoSolucionados, setNãoSolucionados] = useState([]);
  const [loading, setLoading] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

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
    getRecente();
    getFinalizados();
    getNãoSolucionados();
  }, [params]);

  const getAndamento = async () => {
    setLoading(m => ({ ...m, 0: true }));
    const data = await getTicketsByStatus({ ...params, ids_status: 2 });
    if (data) setEmAndamento(data);
    setLoading(m => ({ ...m, 0: false }));
  };

  const getRecente = async () => {
    setLoading(m => ({ ...m, 1: true }));
    const data = await getTicketsByStatus({ ...params, ids_status: 1 });
    if (data) setRecente(data);
    setLoading(m => ({ ...m, 1: false }));
  };

  const getFinalizados = async () => {
    setLoading(m => ({ ...m, 2: true }));
    const data = await getTicketsByStatus({ ...params, ids_status: 4 });
    if (data) setFinalizados(data);
    setLoading(m => ({ ...m, 2: false }));
  };

  const getNãoSolucionados = async () => {
    setLoading(m => ({ ...m, 3: true }));
    const data = await getTicketsByStatus({ ...params, ids_status: 3 });
    if (data) setNãoSolucionados(data);
    setLoading(m => ({ ...m, 3: false }));
  };

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
            <UserListComponent
              title="Em andamento"
              content={emAndamento}
              loading={loading[0]}
            />
          </Box>

          <Box flex="1">
            <UserListComponent
              title="Aberto recentemente"
              content={recente}
              loading={loading[1]}
            />
          </Box>
        </Stack>

        <Stack direction="row" flex="1">
          <Box flex="1">
            <UserListComponent
              title="Finalizados"
              content={finalizados}
              loading={loading[3]}
            />
          </Box>

          <Box flex="1">
            <UserListComponent
              title="Não solucionados"
              content={nãoSolucionados}
              loading={loading[3]}
            />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TicketsPage;
