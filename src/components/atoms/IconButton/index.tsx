import React from 'react';
import {
  IconButton as MuiButton,
  ButtonProps as MuiButtonProps,
  styled,
} from '@mui/material';
import theme from '../../../theme';

interface ButtonProps extends MuiButtonProps {
  onClick?: () => void;
  className?: string;
  icon: React.ReactNode;
  selected?: boolean;
}

const StyledButton = styled(MuiButton)({
  color: theme.palette.accent.grey,
  '&.MuiIconButton-root': {
    height: '2.5rem !important',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
});
const IconButton = ({
  onClick,
  className,
  icon,
  selected = false,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      disableElevation
      data-testid="button"
      onClick={onClick}
      className={className}
      variant="text"
      size="small"
      style={{
        color: selected
          ? theme.palette.primary.main
          : theme.palette.accent.grey,
      }}
      {...props}
    >
      {icon}
    </StyledButton>
  );
};

export default IconButton;
