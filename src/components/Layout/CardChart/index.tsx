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
    <Box
      w={['full', '424px']}
      key={item?.title}
      bg="white"
      p={['10px 20px', '24px']}>
      <Stack direction="row" alignItems="center">
        <Stat mr={[0, '10px']}>
          <StatNumber
            color="text.primary"
            fontSize={as === 'home' ? '28px' : '18px'}
            fontWeight="bold">
            {item?.title}
          </StatNumber>
          <StatLabel color="text.primary" fontSize="12px">
            {item?.message}
          </StatLabel>
          <StatHelpText color="text.secondary" mt={[2, '20px']}>
            <StatArrow type={item?.type as 'increase'} />
            {item?.chart} Outubro
          </StatHelpText>
        </Stat>
        <Box>
          <Chart progress={item?.progress} />
        </Box>
      </Stack>
    </Box>
  );
};

export default CardChart;
