import React from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';
import styled from '@emotion/styled';
import Typography from '../Typography';
import { TypographyVariant } from '../../../utils/types';

interface ButtonProps extends MuiButtonProps {
  backgroundColor?: string;
  hoverbackgroundColor?: string;
  labelColor: string;
  children: string | React.ReactNode;
  labelVariant?: TypographyVariant;
  hoverColor?: string;
  onClick?: () => void;
  className?: string;
}

const StyledButton = styled(MuiButton)<ButtonProps>(
  ({ backgroundColor, hoverbackgroundColor, labelColor, hoverColor }) => ({
    textTransform: 'none',
    borderRadius: 0,
    backgroundColor: backgroundColor,
    color: labelColor,
    '&.MuiButton-contained': {
      '&:hover': {
        backgroundColor: hoverbackgroundColor,
        color: hoverColor,
      },
    },
    '&.MuiButton-outlined': {
      '&:hover': {
        backgroundColor: hoverbackgroundColor,
        color: hoverColor,
      },
    },
    '&.MuiButton-text': {
      '&:hover': {
        backgroundColor: 'transparent',
        color: hoverColor,
      },
    },
  }),
);

const Button = ({
  labelVariant,
  backgroundColor,
  hoverbackgroundColor,
  onClick,
  className,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      {...props}
      disableRipple
      disableTouchRipple
      disableFocusRipple
      disableElevation
      data-testid="button"
      backgroundColor={backgroundColor}
      hoverbackgroundColor={hoverbackgroundColor}
      onClick={onClick}
      className={className}
    >
      <Typography color={'inherit'} variant={labelVariant}>
        {props.children}
      </Typography>
    </StyledButton>
  );
};

export default Button;
