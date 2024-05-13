import { Box, Divider } from '@mui/material';
import React from 'react';
import Icon from '../../atoms/Icon';
import noImage from '../../../../public/assets/images/no-image.png';
import Typography from '../../atoms/Typography';
import styled from '@emotion/styled';
import CustomChip from '../../atoms/Chip';
import theme from '../../../theme';
import Image from '../../atoms/Image';

export interface OrderDetailProps {
  image?: string;
  part: string;
  partNumber: string;
  qty: number;
  unitPrice: number;
  total: number;
  showXref: boolean;

  columns: string[];
}

const OuterGrid = styled(Box)({
  flex: 0.7,
  justifyContent: 'space-between',
  display: 'flex',
});

const OuterLayout = styled(Box)({
  justifyContent: 'space-between',
  display: 'flex',
  padding: '20px 0px 20px 0px',
});

const InnerRowGrid = styled(Box)({
  display: 'flex',
  gap: '15px',
  alignItems: 'center',
});

const OuterContainer = styled(Box)({
  justifyContent: 'space-between',
  display: 'flex',
  paddingBottom: '10px',
});

const ImageWrapper = styled(Box)({
  display: 'flex',
  gap: '15px',
  alignItems: 'center',
  flex: 0.2,
});
const OrderDetailCard = ({
  image,
  part,
  partNumber,
  qty,
  unitPrice,
  total,
  showXref,
  columns,
}: OrderDetailProps) => {
  return (
    <>
      <OuterContainer>
        <Box sx={{ flex: 0.3 }}>
          <Typography
            variant="caption1"
            color={theme.palette.highEmphasis.main}
          >
            {columns[0]}
          </Typography>
        </Box>

        <Box
          sx={{
            flex: showXref ? 0.67 : 0.73,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {columns.slice(1).map((column) => (
            <Typography
              variant="caption1"
              key={column}
              color={theme.palette.highEmphasis.main}
            >
              {column}
            </Typography>
          ))}
        </Box>
      </OuterContainer>
      <Divider />

      <OuterLayout>
        <ImageWrapper>
          {image ? (
            <Icon
              src={image}
              width="24px"
              height="24px"
              iconAlt={'Product Image'}
            />
          ) : (
            <Image src={noImage} height="24px" width="24px" alt="Image" />
          )}
          <Typography variant="body2" color={theme.palette.highEmphasis.main}>
            {part}
          </Typography>
        </ImageWrapper>
        <OuterGrid>
          <InnerRowGrid>
            <Typography variant="body2" color={theme.palette.highEmphasis.main}>
              {partNumber}
            </Typography>
            {showXref && <CustomChip label={'XREF'} />}
          </InnerRowGrid>
          <Typography variant="body2" color={theme.palette.highEmphasis.main}>
            {qty}
          </Typography>
          <Typography variant="body2" color={theme.palette.highEmphasis.main}>
            ${unitPrice.toFixed(3)}
          </Typography>
          <Typography variant="body2" color={theme.palette.highEmphasis.main}>
            ${total.toFixed(3)}
          </Typography>
        </OuterGrid>
      </OuterLayout>

      <Divider />
    </>
  );
};

export default OrderDetailCard;
