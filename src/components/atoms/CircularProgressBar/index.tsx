import React from 'react';
import { CircularProgress, keyframes, styled } from '@mui/material';
import theme from '../../../theme';

interface ProgressBarProps {
  size?: number;
  thickness?: number;
}

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledCircularProgress = styled(CircularProgress)({
  animation: `${rotateAnimation} 1s linear infinite`,
});

const CircularProgressBar: React.FC<ProgressBarProps> = ({
  size = 25,
  thickness = 7,
}) => {
  return (
    <React.Fragment>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={theme.palette.primary.dark} />
            <stop offset="100%" stopColor={theme.palette.primary.light} />
          </linearGradient>
        </defs>
      </svg>
      <StyledCircularProgress
        value={100}
        size={size}
        thickness={thickness}
        sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }}
        variant={'determinate'}
      />
    </React.Fragment>
  );
};

export default CircularProgressBar;
