/* eslint-disable react-hooks/exhaustive-deps */
import { Stack } from '@chakra-ui/react';
import { useClients } from 'hooks/clients';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import TopMenu from './components/topmenu';
import ClientContracts from './pages/contracts';
import ClientProfile from './pages/profile';
import ClientTickets from './pages/tickets';

type Active = 'profile' | 'tickets' | 'contracts';

interface Params {
  id?: string;
}

const UserDataPage: React.FC = () => {
  const [active, setActive] = useState<Active>('profile');
  const { getClient, client, loading } = useClients();
  const { id } = useParams<Params>();

  useEffect(() => {
    getClient(Number(id));
  }, []);

  const Pages = {
    profile: ClientProfile,
    tickets: ClientTickets,
    contracts: ClientContracts,
  }[active || 'profile'];

  return (
    <Stack flex="1">
      <TopMenu active={active} onChange={a => setActive(a)} />
      <Stack p="20px">{!loading && !!client && <Pages />}</Stack>
    </Stack>
  );
};

export default UserDataPage;
