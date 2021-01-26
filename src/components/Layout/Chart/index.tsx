import { Box, Text } from '@chakra-ui/react';
import React from 'react';

interface ChartType {
  progress: string;
}

const Chart = ({ progress }: ChartType) => {
  const progressess = (Number(progress) / 100) * 180;

  return (
    <Box as="div">
      <Box
        w={['120px', '200px']}
        h={['60px', '100px']}
        as="div"
        pos="relative"
        overflow="hidden"
        m="0 auto"
        listStyleType="none"
        _before={{
          position: 'absolute',
          w: 'inherit',
          h: 'inherit',
          borderWidth: ['20px', '30px'],
          borderColor: 'border.divider',
          borderBottom: 'none',
          content: "''",
          borderBottomWidth: 0,
          borderTopRightRadius: '175px',
          borderTopLeftRadius: '175px',
        }}>
        <Box
          as="li"
          pos="absolute"
          border={['20px solid', '30px solid']}
          top="100%"
          transform={`rotate(${progressess}deg)`}
          w="inherit"
          h="inherit"
          borderTop="none"
          transformOrigin="50% 0"
          borderBottomRightRadius="175px"
          borderBottomLeftRadius="175px"
          _odd={{
            zIndex: 1,
            flex: 1,
            borderColor: 'theme.primary',
            borderTop: 'none',
          }}
          borderColor="theme.primary"
        />
        <Text
          fontSize={['18px', '30px']}
          transform={['translate(37%, 128%)', 'translate(37%, 132%)']}>
          {progress}%
        </Text>
      </Box>
    </Box>
  );
};

export default Chart;
