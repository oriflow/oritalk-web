import { Box, Button } from '@chakra-ui/react';
import ExpandableTable from 'components/Layout/ExpandableTable';
import React from 'react';
import { FiDownload } from 'react-icons/fi';

import UserDetails from '../../components/userdetails';
import { Columns, dataFake } from './fake';

const ClientContracts: React.FC = () => {
  return (
    <Box>
      <UserDetails />

      <ExpandableTable
        columns={[
          ...Columns,
          {
            title: 'Ações',
            accessor: 'actions',
            isNumeric: true,
            Cell: (
              <Button color="black" leftIcon={<FiDownload />} variant="link">
                Termos de cancelamento
              </Button>
            ),
          },
        ]}
        data={dataFake}
      />
    </Box>
  );
};

export default ClientContracts;
