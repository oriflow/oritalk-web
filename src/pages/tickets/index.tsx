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
    const data = await getTicketsByStatus({ ...params, ids_status: 2 });
    if (data) setEmAndamento(data);
  };

  const getRecente = async () => {
    const data = await getTicketsByStatus({ ...params, ids_status: 1 });
    if (data) setRecente(data);
  };

  const getFinalizados = async () => {
    const data = await getTicketsByStatus({ ...params, ids_status: 4 });
    if (data) setFinalizados(data);
  };

  const getNãoSolucionados = async () => {
    const data = await getTicketsByStatus({ ...params, ids_status: 3 });
    if (data) setNãoSolucionados(data);
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
            <UserListComponent title="Em andamento" content={emAndamento} />
          </Box>

          <Box flex="1">
            <UserListComponent title="Aberto recentemente" content={recente} />
          </Box>
        </Stack>

        <Stack direction="row" flex="1">
          <Box flex="1">
            <UserListComponent title="Finalizados" content={finalizados} />
          </Box>

          <Box flex="1">
            <UserListComponent
              title="Não solucionados"
              content={nãoSolucionados}
            />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TicketsPage;
