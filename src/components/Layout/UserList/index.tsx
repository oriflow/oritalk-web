import {
  Avatar,
  Box,
  Button,
  Stack,
  Text,
  Skeleton,
  SkeletonCircle,
} from '@chakra-ui/react';
import { useRoute } from 'hooks/useRoute';
import moment from 'moment';
import React from 'react';

interface UserListProperties {
  title?: string;
  content: any;
  as?: 'finance' | 'tickets';
}

const UserListComponent = ({
  title,
  content,
  as,
}: UserListProperties): JSX.Element => {
  const { push } = useRoute();

  const route = as !== 'finance' ? content[0]?.id_status : content.id;

  return (
    <Box flex="1" bg="white" p="15px 20px">
      <Stack direction="row" justifyContent="space-between">
        <Text fontSize="16px" fontWeight={as === 'finance' ? 'normal' : 'bold'}>
          {title ?? 'Sem título'}
        </Text>
        <Button
          variant="link"
          onClick={() => {
            push(`/tickets/${route}`, title ?? '');
          }}>
          Ver todos {`>`}
        </Button>
      </Stack>

      <Box mt="20px">
        {content.length === 0 && (
          <Box>
            {[1, 2, 3, 4, 5].map(() => (
              <Stack direction="row" mb="16px">
                <SkeletonCircle height="32px" />
                <Skeleton height="32px" flex="1" />
              </Stack>
            ))}
          </Box>
        )}

        {content.map((item: any, index: number) => (
          <Stack
            key={String(index)}
            direction="row"
            borderBottom="1px solid #eee"
            p="10px 0px"
            alignItems="center">
            <Avatar w="28px" h="28px" />
            <Text flex="1" fontSize="13px">
              {item.customer.name}
            </Text>
            <Text fontSize="12px">
              {moment(item.created_at).format('DD/MM/YYYY')}
            </Text>
          </Stack>
        ))}
      </Box>
    </Box>
  );
};

export default UserListComponent;
