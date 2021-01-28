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
import { ReactComponent as AccountIcon } from 'assets/icons/header/account.svg';
import { ReactComponent as TicketIcon } from 'assets/icons/header/tickets.svg';
import logo from 'assets/png/logo_justfit.png';
import logo_oritalk from 'assets/svg/logo.svg';
import { useRoute } from 'hooks/useRoute';
import React from 'react';
import { FiChevronLeft, FiSearch } from 'react-icons/fi';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { app_routes } from 'routes/app.routes';
import { menu } from 'routes/menu';

interface menuBar {
  children?: React.ReactNode;
}

const MenuBar: React.FC<menuBar> = ({ children }): JSX.Element => {
  const { push, initial_path } = useRoute();
  const { goBack } = useHistory();

  const {
    pathname,
    state,
  }: {
    pathname: string;
    state: { title: string; pathname: string };
  } = useLocation();

  const routes = [...menu, ...app_routes];
  const active = routes?.find(a => useRouteMatch(a?.path)?.url === pathname);

  return (
    <Stack h="100%" overflow="hidden">
      <Stack
        pos="absolute"
        zIndex="10000"
        w="full"
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
          {active?.path !== initial_path && (
            <Button onClick={goBack} variant="link" mr="6px">
              <Icon boxSize="24px" as={FiChevronLeft} color="black" />
            </Button>
          )}

          <Text fontSize="18px">
            {state?.title || active?.name || 'Página não encontrada'}
          </Text>
          <Text fontSize="12px" p="0px 12px" color="grey">
            Última atualização: 01/11/2020 - 23:59
          </Text>
        </Stack>
        <Stack direction="row" spacing="30px" pr="30px" align="center">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon color="text.secondary" as={FiSearch} />
            </InputLeftElement>
            <Input
              w="400px"
              placeholder="Busque por CPF, nome, ticket ou status"
            />
          </InputGroup>
          <Icon viewBox="0 0 32 32" boxSize={['26px', '30px']}>
            <TicketIcon />
          </Icon>
          <Icon viewBox="0 0 32 32" boxSize={['26px', '30px']}>
            <AccountIcon />
          </Icon>
        </Stack>
      </Stack>

      <Stack
        pt={['50px', '56px']}
        m="0 !important"
        h="100%"
        flexDirection="row">
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
              const route_name = active?.path.replace('/:id', '');
              const isActive =
                item.path === active?.path || item.path === route_name;
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
        <Stack overflow="auto" mt="1px !important" flex="1" bg="background.700">
          {children}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MenuBar;
