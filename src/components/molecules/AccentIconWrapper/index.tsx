import React from 'react';
import { Box, styled } from '@mui/material';
import theme from '../../../theme';
import IconComponent from '../../atoms/Icon';

interface IAccentIconWrapper {
  iconSrc: string;
  iconAlt: string;
}

const MainContainer = styled(Box)({
  border: `3px solid ${theme.palette.accent.yellow}`,
  width: '66px',
  height: '66px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  background: theme.palette.gradient.gradientIconBg,
  borderRadius: '50%',
});

const AccentIconWrapper: React.FC<IAccentIconWrapper> = ({
  iconAlt,
  iconSrc,
}) => {
  return (
    <MainContainer>
      <IconComponent
        src={iconSrc}
        iconAlt={iconAlt}
        width={'36px'}
        height={'36px'}
      />
    </MainContainer>
  );
};

export default AccentIconWrapper;
