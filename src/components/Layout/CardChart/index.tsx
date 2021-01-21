import {
  Box,
  Stack,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import React from 'react';

import Chart from '../Chart';

interface CardProperties {
  as?: 'finance' | 'home';
  item: {
    title: string;
    message: string;
    chart: string;
    type: 'increase' | 'decrease' | string;
    progress: string;
  };
}

const CardChart = ({ item, as }: CardProperties) => {
  return (
    <Box flex="1" key={item.title} bg="white" p="12px 15px">
      <Stack direction="row" alignItems="center">
        <Stat mr="10px">
          <StatNumber
            fontSize={as === 'home' ? '28px' : '18px'}
            fontWeight="bold">
            {item.title}
          </StatNumber>
          <StatLabel fontSize="12px">{item.message}</StatLabel>
          <StatHelpText mt={as === 'home' ? '0' : '20px'}>
            <StatArrow type={item.type as 'increase'} />
            {item.chart} Outubro
          </StatHelpText>
        </Stat>
        <Chart progress={item.progress} />
      </Stack>
    </Box>
  );
};

export default CardChart;
