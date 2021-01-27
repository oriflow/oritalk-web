import { Box, Stack } from '@chakra-ui/react';
import CardChart from 'components/Layout/CardChart';
import UserListComponent from 'components/Layout/UserList';
import React from 'react';

const FinancesPage: React.FC = () => {
  return (
    <Stack p="20px">
      <Stack direction="row" spacing="20px">
        {[1, 2, 3, 4].map(item => (
          <Box bg="white" flex="1" key={item}>
            <CardChart
              as="finance"
              item={{
                title: 'Em análise',
                message: '1.987 neste mês',
                chart: '2%',
                progress: '80',
                type: 'increase',
              }}
            />
            <UserListComponent
              as="finance"
              title="Em andamento"
              content={[0, 1, 2, 3, 4]}
            />
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default FinancesPage;
