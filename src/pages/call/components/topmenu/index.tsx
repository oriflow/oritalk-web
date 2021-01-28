import { Button, Stack, Text } from '@chakra-ui/react';
import React from 'react';

type active = 'chat' | 'contracts';
interface TopMenuProps {
  onChange: (T: active) => void;
  active: active;
}
interface MenuProps {
  title: string;
  name: active;
}

const TopMenu: React.FC<TopMenuProps> = ({ onChange, active }) => {
  const menu: MenuProps[] = [
    { title: 'Chat', name: 'chat' },
    { title: 'Contratos', name: 'contracts' },
  ];

  return (
    <Stack>
      <Stack direction="row" justifyContent="space-between" align="center">
        <Stack direction="row" textColor="text.secondary" spacing="0">
          {menu.map(item => (
            <Stack
              align="center"
              onClick={() => onChange(item.name)}
              key={item.name}
              bg={active === item.name ? 'background.light_primary' : undefined}
              p="20px 32px"
              w="160px"
              cursor="pointer">
              <Text
                color={
                  active === item.name ? 'theme.primary' : 'text.secondary'
                }
                borderBottom={active === item.name ? '2px solid' : undefined}
                borderColor="theme.primary">
                {item.title}
              </Text>
            </Stack>
          ))}
        </Stack>
        <Stack direction="row" p="0px 40px">
          <Button w="180px" variant="outline">
            Reativar
          </Button>
          <Button w="180px" variant="outline">
            Reativar cobrança
          </Button>
          <Button w="180px">Finalizar chamado</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TopMenu;
