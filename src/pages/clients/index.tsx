/* eslint-disable react-hooks/exhaustive-deps */
import {
  Avatar,
  Box,
  Button,
  Spinner,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react';
import { Form } from '@unform/web';
import user from 'assets/png/user.png';
import { InputComponent } from 'components/Forms/Input';
import Table from 'components/Layout/Table';
import { useClients } from 'hooks/clients';
import { useRoute } from 'hooks/useRoute';
import moment from 'moment';
import React, { useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { MdFilterList } from 'react-icons/md';

const ClientsPage: React.FC = (): JSX.Element => {
  const { push } = useRoute();
  const { getClients, clients, loading } = useClients();

  useEffect(() => {
    getClients();
  }, []);

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

      {!!loading && clients.length === 0 ? (
        <Stack p="30px" align="center">
          <Spinner color="theme.primary" />
        </Stack>
      ) : (
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
              accessor: 'cgc',
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
              accessor: 'lastTicket',
              Cell: (data: any) =>
                moment(data.value).format('DD/MM/YYYY [às] HH:mm:ss'),
            },
            {
              title: 'Status',
              accessor: 'status',
              Cell: <Tag variant="success">Finalizado</Tag>,
            },
            {
              title: '',
              accessor: 'id_customer',
              isNumeric: true,
              Cell: (data: any) => (
                <Button
                  onClick={() => push(`/clients/${data.value}`)}
                  variant="outline">
                  Ver atendimento
                </Button>
              ),
            },
          ]}
          data={clients}
        />
      )}
    </Stack>
  );
};

export default ClientsPage;
