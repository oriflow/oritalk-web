import {
  Box,
  Button,
  Image,
  Stack,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import chart_svg from 'assets/svg/chart.svg';
import Chart from 'components/Layout/Chart';
import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';

import { fake } from './fake';

const HomePage: React.FC = () => {
  return (
    <Stack flex="1" p="20px">
      <Stack direction="row">
        <Button rightIcon={<MdArrowDropDown />} variant="outline">
          Relatorios da semana
        </Button>
        <Button rightIcon={<MdArrowDropDown />} variant="outline">
          Todas as unidades
        </Button>
      </Stack>

      <Stack direction="row" pt="10px" spacing="10px" flexWrap="wrap">
        {fake.map(item => (
          <Box flex="1" key={item.title} bg="white" p="12px 15px">
            <Stack direction="row" alignItems="center">
              <Stat mr="10px">
                <StatNumber fontWeight="bold">{item.title}</StatNumber>
                <StatLabel fontSize="12px">{item.message}</StatLabel>
                <StatHelpText mt="8px">
                  <StatArrow type={item.type as 'increase'} />
                  {item.chart} Outubro
                </StatHelpText>
              </Stat>
              <Chart progress={item.progress} />
            </Stack>
          </Box>
        ))}
      </Stack>

      <Stack
        direction="row"
        pt="10px"
        justifyContent="space-around"
        spacing="10px">
        <Box flex="1" bg="white" p="20px">
          <Box pb="10px">
            <Text>Atendimentos</Text>
          </Box>
          <Stack direction="row">
            <Box flex="1.4" pr="20px" pt="14px">
              <Image src={chart_svg} />
            </Box>

            <Box flex="1" p="10px">
              {[0, 1, 2, 3].map(() => (
                <Box mb="12px" w="full">
                  <Text fontWeight="bold">Finalizados</Text>
                  <Stack
                    direction="row"
                    fontSize="10px"
                    justifyContent="space-between">
                    <Text flex="1">44 nesta semana</Text>
                    <Stat flex="0.7">
                      <StatHelpText fontSize="10px">
                        +4% Outubro
                        <StatArrow ml="10px" boxSize="10px" type="increase" />
                      </StatHelpText>
                    </Stat>
                  </Stack>
                </Box>
              ))}
            </Box>
          </Stack>
        </Box>
        <Box flex="1" bg="white" p="20px">
          <Text>Movimentações contratuais em unidades</Text>
          <Stack mt="30px">
            <Table>
              <Thead color="grey !important" textTransform="none">
                <Tr>
                  <Th textTransform="none">Unidade</Th>
                  <Th textTransform="none">Qtde contratos</Th>
                  <Th textTransform="none">Total arrecado</Th>
                  <Th textTransform="none">Crescimento</Th>
                </Tr>
              </Thead>
              <Tbody fontSize="12px">
                {[0, 1, 2].map(() => (
                  <Tr>
                    <Td>Morumbi / SP</Td>
                    <Td>107 un</Td>
                    <Td>R$15.658,22</Td>
                    <Td isNumeric>
                      <Stat flex="0.7">
                        <StatHelpText fontSize="10px">
                          +70%
                          <StatArrow ml="10px" boxSize="10px" type="increase" />
                        </StatHelpText>
                      </Stat>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default HomePage;
