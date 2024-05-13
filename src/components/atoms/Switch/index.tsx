import React from 'react';
import { Switch as MuiSwitch, SwitchProps } from '@mui/material';
import styled from '@emotion/styled';
import theme from '../../../theme';

const StyledSwitch = styled(MuiSwitch)({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',

  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
      },
      '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.white.main,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    background: theme.palette.primary.main,
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  '& .MuiSwitch-track': {
    border: '1px solid rgb(0, 75, 182)',
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: 'white',
    boxSizing: 'border-box',
  },
});

const Switch = ({ ...props }: SwitchProps) => {
  return <StyledSwitch data-testid="switch" {...props} />;
};

export default Switch;
