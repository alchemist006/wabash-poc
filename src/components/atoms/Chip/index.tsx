import { Chip, styled } from '@mui/material';

import React from 'react';
import theme from '../../../theme';

export interface ChipProps {
  label: React.ReactNode | string;
  style?: React.CSSProperties;
}

const MuiChip = styled(Chip)({
  color: theme.palette.accent.blue,
  border: `2px solid ${theme.palette.accent.blue}`,
  width: 'fit-content',
  height: 'fit-content',
  '.css-1jzq0dw-MuiChip-label': {
    padding: '2px 5px 2px 5px',
  },
});

const CustomChip: React.FC<ChipProps> = (props: ChipProps) => {
  return <MuiChip variant="outlined" {...props} />;
};

export default CustomChip;
