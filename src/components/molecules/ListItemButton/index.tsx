import React, { useState } from 'react';
import { ListItemButton, styled } from '@mui/material';
import Typography from '../../atoms/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import theme from '../../../theme';

interface IListItemProps {
  label: string;
  onClick: () => void;
}

const StyledListButton = styled(ListItemButton)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 0',
});

const ListItemButtonComponent: React.FC<IListItemProps> = ({
  label,
  onClick,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    onClick();
  };
  return (
    <StyledListButton onClick={handleToggle}>
      <Typography color={theme.palette.highEmphasis.main} variant={'body2'}>
        {label}
      </Typography>
      {isExpanded ? (
        <KeyboardArrowUpIcon color="primary" data-testid={'up-arrow'} />
      ) : (
        <KeyboardArrowDownIcon color="primary" data-testid={'down-arrow'} />
      )}
    </StyledListButton>
  );
};

export default ListItemButtonComponent;
