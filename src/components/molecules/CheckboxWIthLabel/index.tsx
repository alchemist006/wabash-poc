import React from 'react';
import { styled } from '@mui/material';
import Typography from '../../atoms/Typography';
import theme from '../../../theme';
import CheckBox from '../../atoms/Checkbox';
import { TypographyVariant } from '../../../utils/types';

interface IListItemProps {
  label: string;
  onClick: () => void;
  checked?: boolean;
  labelVariant?: TypographyVariant;
  indeterminate?: boolean;
}

const MainContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  alignItems: 'center',
});

const CheckboxLabel: React.FC<IListItemProps> = ({
  label,
  onClick,
  checked = false,
  labelVariant = 'body2',
  indeterminate = false,
}) => {
  const [isChecked, setIsChecked] = React.useState(checked);

  React.useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onClick();
  };
  return (
    <MainContainer data-testid={'checkbox-label'}>
      <CheckBox
        checked={isChecked}
        handleCheckBoxChange={handleCheckboxChange}
        indeterminate={indeterminate}
      />
      <Typography
        color={theme.palette.highEmphasis.main}
        variant={labelVariant}
      >
        {label}
      </Typography>
    </MainContainer>
  );
};

export default CheckboxLabel;
