/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Box, Button, Spinner, Stack, Text } from '@chakra-ui/react';
import { Form } from '@unform/web';
import { InputComponent } from 'components/Forms/Input';
import Table from 'components/Layout/Table';
import { useTickets } from 'hooks/tickets';
import { useRoute } from 'hooks/useRoute';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { FiCalendar, FiSearch } from 'react-icons/fi';
import { useParams } from 'react-router-dom';

const CallsPage: React.FC = () => {
  const { getTicketsByStatus } = useTickets();
  const { push, title } = useRoute();
  const { id } = useParams<any>();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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
  }, []);

  const getAndamento = async () => {
    setLoading(true);
    const data1 = await getTicketsByStatus({ ...params, ids_status: id });
    if (data) setData(data1);
    setLoading(false);
  };

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
      {loading && data.length === 0 && (
        <Stack p="30px" align="center">
          <Spinner color="theme.primary" />
        </Stack>
      )}
      {data.length > 0 && (
        <Table
          columns={[
            {
              title: 'Nome',
              accessor: 'customer.name',
              Cell: (props: any) => (
                <Stack direction="row" alignItems="center">
                  <Avatar w="30px" h="30px" />
                  <Text pl="10px">{props.value}</Text>
                </Stack>
              ),
            },
            {
              title: 'Ticket',
              accessor: 'id_ticket',
              Cell: (props: any) => `#${props.value}`,
            },
            {
              title: 'Data de abertura',
              accessor: 'created_at',
              Cell: (props: any) => moment(props.value).format('DD/MM/YYYY'),
            },
            {
              title: 'Assunto',
              accessor: 'subject.id_subject',
            },
            {
              title: 'Atendente responsável',
              accessor: 'response',
            },
            {
              title: 'Ultima atualização',
              accessor: 'updated_at',
              Cell: (props: any) => moment(props.value).format('DD/MM/YYYY'),
            },
            {
              title: '',
              id: 'actions',
              accessor: (d: any) => String(d.id_ticket),
              isNumeric: true,
              Cell: (props: any) => (
                <Button
                  onClick={() =>
                    push(`/tickets/${id}/calls`, title, {
                      active: props.cell.value,
                    })
                  }
                  variant="outline">
                  Ver atendimento
                </Button>
              ),
            },
          ]}
          data={data}
        />
      )}
    </Stack>
  );
};

export default CallsPage;
