import React, { useState } from 'react';
import { ListItemButton, styled } from '@mui/material';
import Typography from '../../atoms/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import theme from '../../../theme';
import CheckBox from '../../atoms/Checkbox';

interface IListItemProps {
  label: string;
  onClick: () => void;
  checked?: boolean;
}

const StyledListButton = styled(ListItemButton)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 0',
  flex: 1,
});
const MainContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.5rem',
  alignItems: 'center',
  width: '100%',
});

const CheckboxLabelIcon: React.FC<IListItemProps> = ({
  label,
  onClick,
  checked = false,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    onClick();
  };
  return (
    <MainContainer>
      <CheckBox checked={checked} />
      <StyledListButton onClick={handleToggle}>
        <Typography
          color={theme.palette.highEmphasis.main}
          variant={'caption4'}
        >
          {label}
        </Typography>
        {isExpanded ? (
          <KeyboardArrowUpIcon color="primary" data-testid={'up-arrow'} />
        ) : (
          <KeyboardArrowDownIcon color="primary" data-testid={'down-arrow'} />
        )}
      </StyledListButton>
    </MainContainer>
  );
};

export default CheckboxLabelIcon;
