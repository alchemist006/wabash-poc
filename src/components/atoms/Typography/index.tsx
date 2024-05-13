import React from 'react';
import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@mui/material';
import { TypographyVariant } from '../../../utils/types';

interface TypographyProps extends MuiTypographyProps {
  color: string;
  children: React.ReactNode;
  variant: TypographyVariant;
  className?: string;
}

const Typography = ({
  className,
  color,
  children,
  variant,
  ...props
}: TypographyProps) => {
  return (
    <MuiTypography
      {...props}
      className={className}
      color={color}
      variant={variant}
    >
      {children}
    </MuiTypography>
  );
};

export default Typography;
