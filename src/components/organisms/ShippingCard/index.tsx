import React from 'react';
import { Box, styled } from '@mui/material';
import Typography from '../../atoms/Typography';
import theme from '../../../theme';

interface IShippingCard {
  shippingMethod: string;
  shippingFrom: string;
  freightAmt: string;
  address: string;
}
const MethodWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});
const OuterLayout = styled(Box)({
  display: 'flex',
  gap: '15px',
  flexDirection: 'column',
  border: `1px solid ${theme.palette.stroke.light}`,
  height: '250px',
  padding: '20px',
});
const InnerLayout = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  gap: '35px',
});
const ShippingCard = ({
  shippingMethod,
  shippingFrom,
  freightAmt,
  address,
}: IShippingCard) => {
  return (
    <OuterLayout>
      <Typography color={theme.palette.highEmphasis.main} variant="body1">
        SHIPPING
      </Typography>
      <Box sx={{ width: '10%' }}>
        <Typography color={theme.palette.highEmphasis.main} variant="body4">
          {address}
        </Typography>
      </Box>
      <InnerLayout>
        <MethodWrapper>
          <Typography color={theme.palette.primary.main} variant="caption1">
            SHIPPING METHOD
          </Typography>
          <Typography
            color={theme.palette.highEmphasis.main}
            variant="subtitle2"
          >
            {shippingMethod}
          </Typography>
        </MethodWrapper>
        <MethodWrapper>
          <Typography color={theme.palette.primary.main} variant="caption1">
            SHIPPING FROM
          </Typography>
          <Typography
            color={theme.palette.highEmphasis.main}
            variant="subtitle2"
          >
            {shippingFrom}
          </Typography>
        </MethodWrapper>
        <MethodWrapper>
          <Typography color={theme.palette.primary.main} variant="caption1">
            FREIGHT AMT
          </Typography>
          <Typography
            color={theme.palette.highEmphasis.main}
            variant="subtitle2"
          >
            {freightAmt}
          </Typography>
        </MethodWrapper>
      </InnerLayout>
    </OuterLayout>
  );
};

export default ShippingCard;
