import { Box, Button, Stack } from '@chakra-ui/react';
import { Form } from '@unform/web';
import { InputComponent } from 'components/Forms/Input';
import TableClients from 'components/Layout/TableClients';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { MdFilterList } from 'react-icons/md';

const ClientsPage: React.FC = (): JSX.Element => {
  return (
    <Stack flex="1" p="20px">
      <Box mb="10px">
        <Form onSubmit={() => {}}>
          <Stack direction="row" justifyContent="space-between">
            <InputComponent
              w="350px"
              variant="flushed"
              borderBottom="1px solid #ddd"
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
      <TableClients />
    </Stack>
  );
};

export default ClientsPage;
