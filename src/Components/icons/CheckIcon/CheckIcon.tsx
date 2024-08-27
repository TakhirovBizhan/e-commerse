import React from 'react';
import { IconProps } from '../Icon';

const CheckIcon: React.FC<IconProps> = ({ className, color, width = 24, height = 24 }) => {

  const styles = {
    height: height,
    width: width
} as React.CSSProperties;

  return (
    <svg
      className={className}
      width={width}
      height={height}
      style={styles}
      viewBox='0 0 24 24'
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 11.6129L9.87755 18L20 7"
        stroke={`var(--color-${color})`}
        strokeWidth="2"
      />
    </svg>
  );
};

export default CheckIcon;