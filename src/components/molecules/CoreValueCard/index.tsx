import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react';
import AccentIconWrapper from '../AccentIconWrapper';
import Typography from '../../atoms/Typography';
import theme from '../../../theme';

export interface ICardProps {
  src: string;
  heading: string;
  title: string;
}

const CardWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '416px',
  textAlign: 'center',
  gap: '16px',
});
const CardMolecule = ({ heading, src, title }: ICardProps) => {
  return (
    <CardWrapper data-testid="card">
      <AccentIconWrapper iconSrc={src} iconAlt={'Mind'} />

      <Typography variant="caption2" color={theme.palette.highEmphasis.main}>
        {heading}
      </Typography>

      <Typography variant="body4" color={theme.palette.highEmphasis.main}>
        {title}
      </Typography>
    </CardWrapper>
  );
};

export default CardMolecule;
