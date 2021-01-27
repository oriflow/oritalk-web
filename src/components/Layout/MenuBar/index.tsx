import {
  Box,
  Avatar,
  Button,
  Stack,
  Text,
  Image,
  Icon,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import logo from 'assets/png/logo_justfit.png';
import logo_oritalk from 'assets/svg/logo.svg';
import { useRoute } from 'hooks/useRoute';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useLocation, useRouteMatch } from 'react-router-dom';
import { clients_routes } from 'routes/client.routes';
import { menu } from 'routes/menu';

interface menuBar {
  children?: React.ReactNode;
}

const MenuBar: React.FC<menuBar> = ({ children }): JSX.Element => {
  const { push } = useRoute();

  const {
    pathname,
    state,
  }: {
    pathname: string;
    state: { title: string };
  } = useLocation();

  const routes = [...menu, ...clients_routes];
  const active = routes?.find(a => useRouteMatch(a?.path)?.url === pathname);

  return (
    <Stack h="100%" overflow="hidden">
      <Stack
        direction="row"
        alignItems="center"
        bg="white"
        boxShadow="0 2px 3px 1px #eee"
        p="10px"
        h={['50px', '56px']}>
        <Box p="0px 20px">
          <Image w={['90px', '110px']} src={logo_oritalk} />
        </Box>
        <Divider orientation="vertical" />
        <Stack flex="1" pl="20px" direction="row" alignItems="center">
          <Text fontSize="18px">
            {active?.name || state?.title || 'Página não encontrada'}
          </Text>
          <Text fontSize="12px" p="0px 12px" color="grey">
            Última atualização: 01/11/2020 - 23:59
          </Text>
        </Stack>
        <Stack direction="row" p="5px 0px">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon color="text.secondary" as={FiSearch} />
            </InputLeftElement>
            <Input
              w="400px"
              placeholder="Busque por CPF, nome, ticket ou status"
            />
          </InputGroup>
        </Stack>
      </Stack>

      <Stack mt="0px !important" h="100%" flexDirection="row">
        <Stack
          alignItems="center"
          borderRight="1px solid #ddd"
          w={['55px', '79px']}
          h="100%"
          bg="background.dark">
          <Stack w={['20px', '50px']} p={[5, '34px 0']} alignItems="center">
            <Avatar boxSize={['40px', '50px']} src={logo} />
          </Stack>

          <Stack p={[2, '30px 0']} flex="1">
            {menu.map(item => {
              const isActive = active?.path === item.path;
              const IconSVG = item.icon;
              return (
                <Box key={item.name}>
                  {item.name === 'Ajustes' && (
                    <Divider
                      orientation="horizontal"
                      m={[1, '10px 0']}
                      p={[0, '10px 0']}
                    />
                  )}
                  <Button
                    onClick={() => push(item.path)}
                    variant="none"
                    p={[0, '35px 0px']}
                    mb={['15px', '30px']}>
                    <Icon
                      bg="bckground.primary"
                      viewBox="0 0 80 80"
                      boxSize={['54px', '75px']}
                      color={isActive ? 'theme.primary' : 'text.secondary'}>
                      <IconSVG />
                    </Icon>
                  </Button>
                </Box>
              );
            })}
          </Stack>
        </Stack>
        <Stack
          h="100%"
          pb="50px"
          overflow="auto"
          mt="1px !important"
          flex="1"
          bg="background.700">
          {children}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MenuBar;
