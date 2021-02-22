import { Avatar, Box, Button, Icon, Stack, Text } from '@chakra-ui/react';
import { Form } from '@unform/web';
import { ReactComponent as EmojiIcon } from 'assets/icons/chat/emoji.svg';
import { ReactComponent as FileIcon } from 'assets/icons/chat/file.svg';
import { ReactComponent as GifIcon } from 'assets/icons/chat/gif.svg';
import { ReactComponent as TextIcon } from 'assets/icons/chat/text.svg';
import user from 'assets/png/user.png';
import { InputComponent } from 'components/Forms/Input';
import React from 'react';

import { chat } from './fake';

interface ClientProp {
  client: any;
}

const ChatPage: React.FC<ClientProp> = ({ client }) => {
  return (
    <Stack direction={['column', 'row']} flex="1" bg="white" h="100%">
      <Stack overflow="auto" p="30px" h="83vh" w="380px">
        <Text color="text.primary" fontSize="18px" mb="48px">
          Ticket #{client?.id_ticket}
        </Text>

        <Stack direction="row" spacing="20px" mb="40px">
          <Avatar w="56px" h="56px" />
          <Box>
            <Text fontSize="18px" fontWeight="700" mb="4px">
              {client?.customer?.name}
            </Text>
            <Text fontSize="12px">CPF: {client?.customer?.cgc}</Text>
            <Button mt="16px" size="sm" variant="outline">
              Ver perfil
            </Button>
          </Box>
        </Stack>

        <Form onSubmit={() => {}}>
          <Box mb="16px" fontSize="14px" textColor="text.secondary">
            <Text>Nome:</Text>
            <InputComponent
              placeholder="Nome"
              disabled
              value={client?.customer?.name}
              name="name"
            />
          </Box>
          <Box mb="16px" fontSize="14px" textColor="text.secondary">
            <Text>Data de nascimento:</Text>
            <InputComponent placeholder="Data de nascimento" name="name" />
          </Box>
          <Box mb="16px" fontSize="14px" textColor="text.secondary">
            <Text>Email:</Text>
            <InputComponent
              placeholder="Email"
              name="name"
              disabled
              value={client?.customer?.email}
            />
          </Box>
          <Box mb="16px" fontSize="14px" textColor="text.secondary">
            <Text>Telefone:</Text>
            <InputComponent
              placeholder="Telefone"
              name="name"
              disabled
              value={client?.customer?.phone}
            />
          </Box>
          <Box mb="16px" fontSize="14px" textColor="text.secondary">
            <Text>Celular:</Text>
            <InputComponent placeholder="Celular" name="name" />
          </Box>
          <Box mb="16px" fontSize="14px" textColor="text.secondary">
            <Text>Endereço:</Text>
            <InputComponent placeholder="Endereço" name="name" />
          </Box>
        </Form>
      </Stack>

      <Stack flex="1" p="20px" pr="28px">
        <Stack
          flex="1"
          border="1px solid"
          borderColor="border.divider"
          overflow="auto">
          <Box p="20px 10px">
            {chat.map((item, index) => (
              <Stack
                key={String(index)}
                mb="20px"
                direction="row"
                alignItems="flex-end"
                justifyContent={item.id === 2 ? 'flex-end' : 'flex-start'}>
                {item.id !== 2 && <Avatar w="32px" h="32px" src={user} />}
                <Box
                  borderRadius="8px"
                  borderBottomLeftRadius={item.id !== 2 ? '0' : '8px'}
                  borderBottomRightRadius={item.id === 2 ? '0' : '8px'}
                  maxW="320px"
                  p="15px"
                  bg={
                    item.id === 1
                      ? 'feedback_gas.background'
                      : 'background.primary'
                  }>
                  <Text mb="10px" fontSize="16px">
                    {item.Name}
                  </Text>
                  <Text color="text.secondary">{item.message}</Text>

                  <Text color="text.disabled" textAlign="right" fontSize="12px">
                    28/10/2020 - 10:09
                  </Text>
                </Box>
              </Stack>
            ))}
          </Box>
        </Stack>
        <Stack
          mb="60px"
          border="1px solid"
          borderColor="border.divider"
          p="16px"
          w="full"
          h="176px">
          <Stack flex="1">
            <Text color="text.secondary">Digite sua mensagem...</Text>
          </Stack>

          <Stack direction="row" alignItems="flex-end">
            <Icon viewBox="0 0 24 24" boxSize="20px">
              <TextIcon />
            </Icon>
            <Icon viewBox="0 0 24 24" boxSize="20px">
              <FileIcon />
            </Icon>
            <Icon viewBox="0 0 24 24" boxSize="20px">
              <EmojiIcon />
            </Icon>
            <Icon viewBox="0 0 24 24" boxSize="20px">
              <GifIcon />
            </Icon>

            <Stack flex="1" alignItems="flex-end">
              <Button size="sm" variant="outline" disabled>
                Enviar
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ChatPage;
