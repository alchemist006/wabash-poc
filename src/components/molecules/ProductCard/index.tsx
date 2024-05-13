import * as React from 'react';
import { Box } from '@mui/material';
import Button from '../../atoms/Button';
import theme from '../../../theme';
import Typography from '../../atoms/Typography';
import Image from '../../atoms/Image';
import noImage from '../../../../public/assets/images/no-image.png';
import styled from '@emotion/styled';

interface IProductCardProps {
  productName: string;
  productNumber: string;
  product: string;
  image?: string;
  onClick?: () => void;
}
const OuterBox = styled(Box)({
  display: 'flex',
  width: '100%',
  height: '300px',
  border: '1px solid rgb(224, 224, 224)',
  flexDirection: 'column',
  textAlign: 'left',
});

const InnerBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding: '16px 14px 5px 2px',
  gap: '1px',
});

const DownLayout = styled(Box)({
  marginLeft: '10px',
  marginBottom: '40px',
});

const ImageWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.white.main,
});

const ProductCard: React.FC<IProductCardProps> = ({
  productName,
  productNumber,
  product,
  image,
  onClick,
}) => {
  return (
    <OuterBox onClick={onClick} data-testid={productNumber}>
      {!image ? (
        <Image src={noImage} height="140px" width="100%" alt="NoImage" />
      ) : (
        <ImageWrapper>
          <Image src={image} height="140px" alt="Image" />
        </ImageWrapper>
      )}

      <InnerBox>
        <Button
          variant={'text'}
          labelVariant="subtitle3"
          labelColor={theme.palette.highEmphasis.main}
          hoverColor={theme.palette.primary.main}
          sx={{ justifyContent: 'flex-start', textAlign: 'left' }}
        >
          {productName}
        </Button>
        <Button
          variant={'text'}
          labelVariant={'subtitle4'}
          labelColor={theme.palette.highEmphasis.main}
          hoverColor={theme.palette.primary.main}
          sx={{ justifyContent: 'flex-start', textAlign: 'left' }}
        >
          {productNumber}
        </Button>
      </InnerBox>
      <DownLayout>
        <Typography
          color={theme.palette.highEmphasis.main}
          variant={'subtitle4'}
        >
          {product}
        </Typography>
      </DownLayout>
    </OuterBox>
  );
};
export default ProductCard;
