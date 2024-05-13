import { Box, styled } from '@mui/material';
import Typography from '../../atoms/Typography';
import React from 'react';

interface CategoryCardProps {
  handleClick: (content: string) => void;
  content: string;
}

const StyledContainer = styled(Box)({
  border: '1px solid rgb(224, 224, 224)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '30px',
  height: '40px',
});

const StyledContent = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  flex: 1,
  paddingLeft: '24px',
});
const CategoryCard = ({ handleClick, content }: CategoryCardProps) => {
  return (
    <StyledContainer
      onClick={() => handleClick(content)}
      data-testid="category-card"
    >
      <StyledContent>
        <Typography variant="caption1" color={''}>
          {content}
        </Typography>
      </StyledContent>
    </StyledContainer>
  );
};

export default CategoryCard;
