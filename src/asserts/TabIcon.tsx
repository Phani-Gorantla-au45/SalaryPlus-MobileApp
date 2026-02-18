import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  name: string;
  color: string;
  size: number;
}

const TabIcon: React.FC<Props> = ({ name, color, size }) => {
  if (name === 'home') {
    return (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M3 10L12 3L21 10V20C21 20.55 20.55 21 20 21H14V14H10V21H4C3.45 21 3 20.55 3 20V10Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  }

  if (name === 'bonds') {
    return (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M6 2H18C19.1 2 20 2.9 20 4V20L12 16L4 20V4C4 2.9 4.9 2 6 2Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  }

  return null;
};

export default TabIcon;
