import { Box, Button, Tag } from '@chakra-ui/react';
import Table from 'components/Layout/Table';
import React from 'react';

import UserDetails from '../../components/userdetails';

const ClientTickets: React.FC = () => {
  return (
    <Box>
      <UserDetails />

      <Table
        columns={[
          {
            title: 'Ticket',
            accessor: 'tickets',
          },
          {
            title: 'Status',
            accessor: 'status',
          },
          {
            title: 'Data de abertura',
            accessor: 'initial_date',
          },
          {
            title: 'Assunto',
            accessor: 'subject',
          },
          {
            title: 'Atendente responsável',
            accessor: 'response',
          },
          {
            title: 'Última atualização',
            accessor: 'atualization',
          },
          {
            title: '',
            accessor: 'actions',
            isNumeric: true,
          },
        ]}
        data={[
          {
            tickets: '#0003',
            status: <Tag>Em andamento</Tag>,
            initial_date: '30/10/2020',
            subject: 'Cancelamento',
            response: 'Tomás Ribeiro, Carolina Correia',
            atualization: '12/07/2020 - 17:02',
            actions: <Button variant="outline">Ver atendimento</Button>,
          },
          {
            tickets: '#0001',
            status: <Tag variant="solid">Aberto</Tag>,
            initial_date: '26/09/2020',
            subject: 'Financeiro',
            response: 'Carolina Correia',
            atualization: '28/10/2020 - 15:33',
            actions: <Button variant="outline">Ver atendimento</Button>,
          },
          {
            tickets: '#0002',
            status: <Tag variant="success">Finalizado</Tag>,
            initial_date: '26/09/2020',
            subject: 'Financeiro',
            response: 'Carolina Correia',
            atualization: '28/10/2020 - 15:33',
            actions: <Button variant="outline">Ver atendimento</Button>,
          },
        ]}
      />
    </Box>
  );
};

export default ClientTickets;
