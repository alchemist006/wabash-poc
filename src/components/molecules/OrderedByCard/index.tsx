import React from 'react';
import { Box, styled } from '@mui/material';
import Typography from '../../atoms/Typography';
import theme from '../../../theme';

interface IShippingCard {
  accountNo: string;
  salesRepId: string;
  po?: string;
  orderNo?: string;
  part_name: string;
  invoice: boolean;
}
const ItemWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  paddingBottom: '20px',
});
const OuterWrapper = styled(Box)({
  display: 'flex',
  gap: '15px',
  flexDirection: 'column',
  border: `1px solid ${theme.palette.stroke.light}`,
  height: '250px',
  padding: '20px',
});
const InnerWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  gap: '35px',
});
const OrderedByCard = ({
  part_name,
  accountNo,
  salesRepId,
  po,
  orderNo,
  invoice,
}: IShippingCard) => {
  return (
    <OuterWrapper>
      <Typography color={theme.palette.highEmphasis.main} variant="body1">
        ORDERED BY
      </Typography>
      <Box>
        <Typography color={theme.palette.highEmphasis.main} variant="body4">
          {part_name}
        </Typography>
      </Box>
      <InnerWrapper>
        <Box>
          <ItemWrapper>
            <Typography color={theme.palette.primary.main} variant="caption1">
              ACCOUNT NO.
            </Typography>
            <Typography
              color={theme.palette.highEmphasis.main}
              variant="subtitle2"
            >
              {accountNo}
            </Typography>
          </ItemWrapper>
          <ItemWrapper>
            <Typography color={theme.palette.primary.main} variant="caption1">
              SALES REP ID
            </Typography>
            <Typography
              color={theme.palette.highEmphasis.main}
              variant="subtitle2"
            >
              {salesRepId}
            </Typography>
          </ItemWrapper>
        </Box>
        {invoice && (
          <Box sx={{ marginLeft: '15%' }}>
            <ItemWrapper>
              <Typography color={theme.palette.primary.main} variant="caption1">
                PO
              </Typography>
              <Typography
                color={theme.palette.highEmphasis.main}
                variant="subtitle2"
              >
                {po}
              </Typography>
            </ItemWrapper>
            <ItemWrapper>
              <Typography color={theme.palette.primary.main} variant="caption1">
                ORDER NO
              </Typography>
              <Typography
                color={theme.palette.highEmphasis.main}
                variant="subtitle2"
              >
                {orderNo}
              </Typography>
            </ItemWrapper>
          </Box>
        )}
      </InnerWrapper>
    </OuterWrapper>
  );
};

export default OrderedByCard;
