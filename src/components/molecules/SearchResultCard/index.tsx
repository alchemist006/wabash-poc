import { Box } from '@mui/material';
import React from 'react';
import noImage from '../../../../public/assets/images/no-image.png';
import Typography from '../../atoms/Typography';
import theme from '../../../theme';
import styled from '@emotion/styled';
import Image from '../../atoms/Image';

interface SearchResultCardProps {
  part_number: string;
  manfacturer: string;
  description: string;
  handleClick?: () => void;
  image?: string;
}

const OuterBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '160px',
  padding: '15px',
  cursor: 'pointer',
});
const SearchResultCard = ({
  part_number,
  manfacturer,
  description,
  handleClick,
  image,
}: SearchResultCardProps) => {
  return (
    <OuterBox onMouseDown={handleClick} role="list">
      <Box>
        {!image ? (
          <Image src={noImage} height="35px" width="60px" alt="NoImage" />
        ) : (
          <Image src={image} height="24px" width="30px" alt="Image" />
        )}
      </Box>
      <Box>
        <Typography color={theme.palette.primary.main} variant="caption4">
          {part_number}
        </Typography>
      </Box>
      <Box sx={{ maxWidth: '120px' }}>
        <Typography variant="subtitle2" color={theme.palette.highEmphasis.main}>
          {manfacturer}
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle2" color={theme.palette.highEmphasis.main}>
          {description}
        </Typography>
      </Box>
      <Box />
    </OuterBox>
  );
};

export default SearchResultCard;
