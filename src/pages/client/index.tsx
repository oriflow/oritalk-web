import { Stack } from '@chakra-ui/react';
import React, { useState } from 'react';

import TopMenu from './components/topmenu';
import ClientContracts from './pages/contracts';
import ClientProfile from './pages/profile';
import ClientTickets from './pages/tickets';

type Active = 'profile' | 'tickets' | 'contracts';

const UserDataPage: React.FC = () => {
  const [active, setActive] = useState<Active>('profile');

  const Pages = {
    profile: ClientProfile,
    tickets: ClientTickets,
    contracts: ClientContracts,
  }[active || 'profile'];

  return (
    <Stack flex="1">
      <TopMenu active={active} onChange={a => setActive(a)} />

      <Stack p="20px">
        <Pages />
      </Stack>
    </Stack>
  );
};

export default UserDataPage;
