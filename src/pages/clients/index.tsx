import { Avatar, Box, Button, Stack, Tag, Text } from '@chakra-ui/react';
import { Form } from '@unform/web';
import user from 'assets/png/user.png';
import { InputComponent } from 'components/Forms/Input';
import Table from 'components/Layout/Table';
import { useRoute } from 'hooks/useRoute';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { MdFilterList } from 'react-icons/md';

const ClientsPage: React.FC = (): JSX.Element => {
  const { push } = useRoute();

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
            <Button variant="outline" rightIcon={<MdFilterList />}>
              Filtros
            </Button>
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
            title: 'CPF',
            accessor: 'cpf',
          },
          {
            title: 'Contrato ativo',
            accessor: 'active_contract',
          },
          {
            title: 'Unidade',
            accessor: 'unidade',
          },
          {
            title: 'Último ticket',
            accessor: 'last_ticket',
          },
          {
            title: 'Status',
            accessor: 'status',
            Cell: (props: any) => (
              <Tag variant={props.value.variant}>{props.value.value}</Tag>
            ),
          },
          {
            title: '',
            accessor: 'actions',
            isNumeric: true,
            Cell: (
              <Button onClick={() => push('/clients/1')} variant="outline">
                Ver atendimento
              </Button>
            ),
          },
        ]}
        data={[
          {
            name: 'Eduardo Souza Martins',
            cpf: '187.244.233-76',
            active_contract: '#23789743 - Just Recupera',
            unidade: 'Morumbi',
            last_ticket: '#009879',
            status: {
              variant: 'solid',
              value: 'Aberto',
            },
          },
          {
            name: 'Maria Souza Martins',
            cpf: '187.244.233-76',
            active_contract: '#23789743 - Just Fit',
            unidade: 'Butantã',
            last_ticket: '#0092879',
            status: {
              variant: 'success',
              value: 'Finalizado',
            },
          },
          {
            name: 'Luiza Souza Martins',
            cpf: '187.244.233-76',
            active_contract: '#23789743 - Fit Recupera',
            unidade: 'Morumbi2',
            last_ticket: '#0098719',
            status: {
              variant: 'gas',
              value: 'Em andamento',
            },
          },
        ]}
      />
    </Stack>
  );
};

export default ClientsPage;
