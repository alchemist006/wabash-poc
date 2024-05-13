import React from 'react';
import { Checkbox, styled } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import theme from '../../../theme';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

interface CheckBoxProps {
  checked?: boolean;
  indeterminate?: boolean;
  handleCheckBoxChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => void;
  className?: string;
  categoyId?: string;
}

const StyledUncheckedIcon = styled(CheckBoxOutlineBlankIcon)({
  color: theme.palette.primary.main,
});

const StyledCheckedIcon = styled(CheckBoxIcon)({
  color: theme.palette.primary.main,
});
const CheckBox = ({
  checked,
  handleCheckBoxChange,
  indeterminate,
  className,
  categoyId,
}: CheckBoxProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (handleCheckBoxChange) {
      handleCheckBoxChange(event, !checked);
    }
  };

  return (
    <Checkbox
      data-testid={categoyId}
      checked={checked}
      onChange={handleChange}
      disableRipple={false}
      icon={<StyledUncheckedIcon fontSize="small" />}
      checkedIcon={<StyledCheckedIcon fontSize="small" />}
      indeterminateIcon={<IndeterminateCheckBoxIcon fontSize="small" />}
      indeterminate={indeterminate}
      style={{ padding: '0', margin: '0', zIndex: 8 }}
      className={className}
    />
  );
};

export default CheckBox;
