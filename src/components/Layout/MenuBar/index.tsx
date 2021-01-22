import {
  Box,
  Avatar,
  Button,
  Stack,
  Text,
  Image,
  Icon,
} from '@chakra-ui/react';
import logo from 'assets/png/logo_justfit.png';
import logo_oritalk from 'assets/svg/logo.svg';
import { useRoute } from 'hooks/useRoute';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { menu } from 'routes/menu';

interface menuBar {
  children?: React.ReactNode;
}

const MenuBar: React.FC<menuBar> = ({ children }): JSX.Element => {
  const { push } = useRoute();
  const { pathname, state } = useLocation();
  const location: any = !!state && state;
  const [active, setActive] = useState({ path: '', name: '' });

  useEffect(() => {
    if (state || pathname) {
      menu.map(item => {
        if (item?.path === (pathname || location?.pathname)) {
          setActive(item);
        }
        if (item?.child) {
          item?.child?.map(a => {
            if (a.path === (pathname || location?.pathname)) {
              setActive(a);
              return false;
            }
            return false;
          });
        }
        return true;
      });
    }
  }, [location?.pathname, pathname, state]);

  return (
    <Stack h="100%" overflow="hidden">
      <Stack
        direction="row"
        alignItems="center"
        bg="white"
        boxShadow="0 2px 3px 1px #eee"
        p="10px"
        h="50px">
        <Box w="160px" p="0px 20px" borderRight="1px solid #eee">
          <Image w="110px" src={logo_oritalk} />
        </Box>
        <Stack flex="1" pl="40px" direction="row" alignItems="center">
          <Text fontSize="18px">
            {location?.title || active.name || 'Sem título'}
          </Text>
          <Text fontSize="12px" p="0px 12px" color="grey">
            Última atualização: 01/11/2020 - 23:59
          </Text>
        </Stack>
      </Stack>

      <Stack mt="0px !important" h="100%" flexDirection="row">
        <Stack
          alignItems="center"
          p="10px"
          borderRight="1px solid #ddd"
          w="65px"
          h="100%"
          bg="background.100">
          <Stack
            w="45px"
            borderBottom="1px solid #ddd"
            pb="20px"
            alignItems="center">
            <Avatar w="40px" h="40px" src={logo} />
          </Stack>

          <Stack>
            {menu.map(item => {
              const isActive = active?.path === item.path;
              return (
                <Button
                  onClick={() => push(item.path)}
                  variant="none"
                  p="30px 0px">
                  <Stack alignItems="center" justifyContent="center">
                    <Icon
                      as={item.icon}
                      boxSize="24px"
                      color={isActive ? 'primary.500' : 'grey'}
                    />
                    <Text
                      color={isActive ? 'primary.500' : 'grey'}
                      fontSize="10px"
                      fontWeight="normal">
                      {item.name}
                    </Text>
                  </Stack>
                </Button>
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
