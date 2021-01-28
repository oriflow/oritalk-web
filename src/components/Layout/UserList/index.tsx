import { Avatar, Box, Button, Stack, Text } from '@chakra-ui/react';
import user from 'assets/png/user.png';
import { useRoute } from 'hooks/useRoute';
import React from 'react';

interface UserListProperties {
  title?: string;
  content: Array<number>;
  as?: 'finance' | 'tickets';
}

const UserListComponent = ({
  title,
  content,
  as,
}: UserListProperties): JSX.Element => {
  const { push } = useRoute();
  return (
    <Box flex="1" bg="white" p="15px 20px">
      <Stack direction="row" justifyContent="space-between">
        <Text fontSize="16px" fontWeight={as === 'finance' ? 'normal' : 'bold'}>
          {title ?? 'Sem título'}
        </Text>
        <Button
          variant="link"
          onClick={() => {
            push('/tickets/1', title ?? '');
          }}>
          Ver todos {`>`}
        </Button>
      </Stack>

      <Box mt="20px">
        {content.map(() => (
          <Stack
            direction="row"
            borderBottom="1px solid #eee"
            p="10px 0px"
            alignItems="center">
            <Avatar src={user} w="28px" h="28px" />
            <Text flex="1" fontSize="13px">
              Eduardo Souza
            </Text>
            <Text fontSize="12px">16/10/2020</Text>
          </Stack>
        ))}
      </Box>
    </Box>
  );
};

export default UserListComponent;
