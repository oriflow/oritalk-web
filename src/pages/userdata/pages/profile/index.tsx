import { Box, Image, Stack, Tag, Text } from '@chakra-ui/react';
import { Form } from '@unform/web';
import user from 'assets/png/user.png';
import { ReactComponent as Teste1 } from 'assets/svg/testes/01.svg';
import { ReactComponent as Teste2 } from 'assets/svg/testes/02.svg';
import { InputComponent } from 'components/Forms/Input';
import React from 'react';

const ClientProfile: React.FC = () => {
  return (
    <Box>
      <Stack direction="row" align="center" mb="40px" mt="20px">
        <Image w="72px" h="72px" src={user} />
        <Box pl="10px" textColor="text.primary" mr="65px">
          <Text fontSize="20px" fontWeight="700">
            Eduardo Martins
          </Text>
          <Text fontSize="12px">CPF: 089.925.088-24</Text>
        </Box>
        <Stack direction="row" spacing="32px" fontSize="12px">
          <Box>
            <Text mb="4px">Status</Text>
            <Tag>Ativo - com bloqueio de cobrança</Tag>
          </Box>
          <Box>
            <Text mb="4px">Último Ticket</Text>
            <Tag variant="solid">#20201013</Tag>
          </Box>
          <Box>
            <Text mb="4px">Ação</Text>
            <Tag>Reembolsado há 3 meses</Tag>
          </Box>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={['20px', '32px']}>
        <Box>
          <Box bg="white" w={['full', '424px']} p="20px">
            <Text fontSize="20px" fontWeight="700">
              Dados do cliente
            </Text>

            <Box mt="28px">
              <Form onSubmit={() => {}}>
                <Box mb="16px" fontSize="14px" textColor="text.secondary">
                  <Text>Nome:</Text>
                  <InputComponent placeholder="Nome" name="name" />
                </Box>
                <Box mb="16px" fontSize="14px" textColor="text.secondary">
                  <Text>Data de nascimento:</Text>
                  <InputComponent
                    placeholder="Data de nascimento"
                    name="name"
                  />
                </Box>
                <Box mb="16px" fontSize="14px" textColor="text.secondary">
                  <Text>Email:</Text>
                  <InputComponent placeholder="Email" name="name" />
                </Box>
                <Box mb="16px" fontSize="14px" textColor="text.secondary">
                  <Text>Telefone:</Text>
                  <InputComponent placeholder="Telefone" name="name" />
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
            </Box>
          </Box>
        </Box>

        <Box>
          <Box bg="white" w={['full', '424px']} p="20px">
            <Text fontSize="20px" fontWeight="700">
              Dados de cobrança
            </Text>

            <Box mt="28px">
              <Form onSubmit={() => {}}>
                <Box mb="16px" fontSize="14px" textColor="text.secondary">
                  <Text>Forma de pagamento:</Text>
                  <InputComponent placeholder="Cartão de crédito" name="name" />
                </Box>
                <Box mb="16px" fontSize="14px" textColor="text.secondary">
                  <Text>Operadora:</Text>
                  <InputComponent placeholder="Mastercard" name="name" />
                </Box>
                <Box mb="16px" fontSize="14px" textColor="text.secondary">
                  <Text>Número do cartão:</Text>
                  <InputComponent placeholder="Número do cartão" name="name" />
                </Box>
                <Box mb="16px" fontSize="14px" textColor="text.secondary">
                  <Text>Validade:</Text>
                  <InputComponent placeholder="Validade" name="name" />
                </Box>
                <Box mb="16px" fontSize="14px" textColor="text.secondary">
                  <Text>Titular:</Text>
                  <InputComponent placeholder="Titular" name="name" />
                </Box>
              </Form>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box bg="white" w={['full', '424px']} p="20px">
            <Text fontSize="20px" fontWeight="700">
              Dados da academia
            </Text>

            <Box mt="28px">
              <Form onSubmit={() => {}}>
                <Box mb="16px" fontSize="14px" textColor="text.secondary">
                  <Text>Academia:</Text>
                  <InputComponent placeholder="Academia" name="name" />
                </Box>
                <Box mb="16px" fontSize="14px" textColor="text.secondary">
                  <Text>Unidade:</Text>
                  <InputComponent placeholder="Unidade" name="name" />
                </Box>
                <Box mb="16px" fontSize="14px" textColor="text.secondary">
                  <Text>Matrícula:</Text>
                  <InputComponent placeholder="Matrícula" name="name" />
                </Box>
                <Box mb="16px" fontSize="14px" textColor="text.secondary">
                  <Text>Plano:</Text>
                  <InputComponent placeholder="Plano" name="name" />
                </Box>
              </Form>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box w={['full', '424px']}>
            <Box mb="20px">
              <Teste1 />
            </Box>
            <Box>
              <Teste2 />
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default ClientProfile;
