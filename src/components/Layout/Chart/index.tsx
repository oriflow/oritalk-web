import { Text } from '@chakra-ui/react';
import React from 'react';

import './styles.css';

type ChartType = {
  progress: string;
};

const Chart = ({ progress }: ChartType) => {
  return (
    <div>
      <ul className="chart-skills">
        <li style={{ transform: `rotate(${progress}deg)` }} />
        <Text className="title">{progress}%</Text>
      </ul>
    </div>
  );
};

export default Chart;
