/* eslint-disable react/prop-types */
import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const BackIcon = ({ color = '#1A1A1A', width = 24, height = 24 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.75 19.5L8.25 12L15.75 4.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
