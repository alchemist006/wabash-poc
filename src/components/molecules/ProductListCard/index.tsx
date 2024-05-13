import { Box } from '@mui/material';
import React from 'react';
import noImage from '../../../../public/assets/images/no-image.png';
import styled from '@emotion/styled';
import Button from '../../atoms/Button';
import theme from '../../../theme';
import Image from '../../atoms/Image';
import CustomChip from '../../atoms/Chip';

interface ProductCardProps {
  image?: string | undefined;
  xref?: boolean;
  handleClick?: () => void;
  CardHash: string;
  CardNumber: string;
  CardName: string;
  handleAddToCart: () => void;
}
const OuterBox = styled(Box)({
  display: 'flex',
  border: '1px solid rgb(224, 224, 224)',
  minHeight: '117px',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '30px',
});

const InnerBox = styled(Box)({
  flex: 2,
  display: 'flex',
  gap: '10px',
  justifyContent: 'space-between',
});

const ImageBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const ProductListCard = ({
  image,
  xref,
  CardHash,
  handleClick,
  CardNumber,
  CardName,
  handleAddToCart,
}: ProductCardProps) => {
  const getImage = (image: string | undefined) => {
    const imageSrc = !image ? noImage : image;
    return <Image src={imageSrc} width="100px" height="100px" alt="images" />;
  };
  return (
    <OuterBox>
      <ImageBox>{getImage(image)}</ImageBox>

      {xref && <CustomChip label={'XREF'} />}

      <Box sx={{ flex: 3 }}>
        <Button
          labelVariant="subtitle1"
          onClick={handleClick}
          labelColor={theme.palette.highEmphasis.main}
          variant="text"
          hoverColor={theme.palette.primary.main}
        >
          {CardHash}
        </Button>
      </Box>
      <InnerBox>
        <Button
          labelVariant="caption4"
          labelColor={theme.palette.highEmphasis.main}
          variant="text"
          hoverColor={theme.palette.primary.main}
          onClick={handleClick}
        >
          {CardNumber}
        </Button>
        <Button
          labelVariant="caption4"
          labelColor={theme.palette.highEmphasis.main}
          variant="text"
        >
          {CardName}
        </Button>
        <Button
          variant="contained"
          labelColor={theme.palette.white.main}
          labelVariant="subtitle2"
          backgroundColor={theme.palette.primary.main}
          onClick={handleAddToCart}
        >
          ADD TO CART
        </Button>
      </InnerBox>
      <Box></Box>
    </OuterBox>
  );
};

export default ProductListCard;
