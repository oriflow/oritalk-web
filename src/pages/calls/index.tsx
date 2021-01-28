import { Avatar, Box, Button, Stack, Text } from '@chakra-ui/react';
import { Form } from '@unform/web';
import user from 'assets/png/user.png';
import { InputComponent } from 'components/Forms/Input';
import Table from 'components/Layout/Table';
import { useRoute } from 'hooks/useRoute';
import React from 'react';
import { FiCalendar, FiSearch } from 'react-icons/fi';

const CallsPage: React.FC = () => {
  const { push, title } = useRoute();

  return (
    <Stack flex="1" p="20px">
      <Box mb="10px">
        <Form onSubmit={() => {}}>
          <Stack direction="row" justifyContent="space-between">
            <InputComponent
              w="350px"
              variant="flushed"
              icon={<FiSearch />}
              placeholder="Pesquise por CPF ou nome do cliente"
              name="search"
            />
            <InputComponent
              w="150px"
              icon={<FiCalendar />}
              placeholder="10/12/2020"
              name="search"
            />
          </Stack>
        </Form>
      </Box>
      <Table
        columns={[
          {
            title: 'Nome',
            accessor: 'name',
            Cell: (props: any) => (
              <Stack direction="row" alignItems="center">
                <Avatar src={user} w="30px" h="30px" />
                <Text pl="10px">{props.value}</Text>
              </Stack>
            ),
          },
          {
            title: 'Ticket',
            accessor: 'ticket',
          },
          {
            title: 'Data de abertura',
            accessor: 'start_date',
          },
          {
            title: 'Assunto',
            accessor: 'object',
          },
          {
            title: 'Atendente responsável',
            accessor: 'response',
          },
          {
            title: 'Ultima atualização',
            accessor: 'last_update',
          },
          {
            title: '',
            accessor: 'actions',
            isNumeric: true,
            Cell: (
              <Button
                onClick={() => push('/tickets/1/calls', title)}
                variant="outline">
                Ver atendimento
              </Button>
            ),
          },
        ]}
        data={[
          {
            name: 'Maria Souza Martins',
            ticket: '#92830799',
            start_date: '16/10/2020',
            object: 'Cancelamento',
            response: 'Carolina Correia, Tomás Ribeiro, Matilde Oliveira',
            last_update: '28/10/2020 - 15:33',
          },
          {
            name: 'Eduardo Souza Martins',
            ticket: '#92830799',
            start_date: '16/10/2020',
            object: 'Financeiro',
            response: 'Carolina Correia, Tomás Ribeiro, Matilde Oliveira',
            last_update: '28/10/2020 - 15:33',
          },
          {
            name: 'Júlia Souza Martins',
            ticket: '#92830799',
            start_date: '16/10/2020',
            object: 'Mudança de plano',
            response: 'Carolina Correia, Tomás Ribeiro, Matilde Oliveira',
            last_update: '28/10/2020 - 15:33',
          },
          {
            name: 'Pedro Souza Martins',
            ticket: '#92830799',
            start_date: '16/10/2020',
            object: 'Cancelamento',
            response: 'Carolina Correia, Tomás Ribeiro, Matilde Oliveira',
            last_update: '28/10/2020 - 15:33',
          },
        ]}
      />
    </Stack>
  );
};

export default CallsPage;
