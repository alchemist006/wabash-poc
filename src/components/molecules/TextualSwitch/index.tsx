import { FormControlLabel } from '@mui/material';
import React from 'react';
import Typography from '../../atoms/Typography';
import Switch from '../../atoms/Switch';
import theme from '../../../theme';

type labelPlacement = 'end' | 'start';
export interface SwitchLabelProps {
  checked?: boolean;
  handleChange: (value: string) => void;
  labelPosition?: labelPlacement;
  label: string;
}

const TextualSwitch = ({
  labelPosition,
  handleChange,
  checked,
  label,
}: SwitchLabelProps) => {
  return (
    <FormControlLabel
      data-testid="form-control-label"
      sx={{ gap: '10px' }}
      label={
        <Typography variant="body2" color={theme.palette.highEmphasis.main}>
          {label}
        </Typography>
      }
      labelPlacement={labelPosition}
      control={
        <Switch
          checked={checked}
          onChange={(e) => handleChange(label)}
          value={label}
        />
      }
    />
  );
};

export default TextualSwitch;
