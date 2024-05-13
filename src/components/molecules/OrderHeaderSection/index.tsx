import { Box } from '@mui/material';
import Typography from '../../atoms/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import theme from '../../../theme';
import React from 'react';
import styled from '@emotion/styled';
import order from '../../../../public/assets/images/order-header.png';
interface IOrderHeaderProps {
  orderNo: string;
  conformationNo: string;
  orderDate: string;
  total: number;
  status: string;
}

const InnerWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

const OuterWrapper = styled(Box)({
  background: `url(${order})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  boxShadow: theme.shadows[1],
});

const InnerBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  padding: '40px',
  gap: '20%',
});

const OrderHeaderSection: React.FC<IOrderHeaderProps> = ({
  orderNo,
  status,
  orderDate,
  total,
  conformationNo,
}) => {
  return (
    <OuterWrapper>
      <InnerBox>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12%',
            width: '20%',
          }}
        >
          <Typography color={theme.palette.accent.yellow} variant="caption1">
            ORDER NO.
          </Typography>
          <Typography color={theme.palette.white.main} variant="h3">
            {orderNo}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '12%',
            width: '100%',
            marginLeft: '5%',
          }}
        >
          <InnerWrapper>
            <Typography color={theme.palette.primary.main} variant="caption1">
              CONFORMATION NO.
            </Typography>
            <Typography color={theme.palette.highEmphasis.main} variant="body4">
              {conformationNo}
            </Typography>
          </InnerWrapper>
          <InnerWrapper>
            <Typography color={theme.palette.primary.main} variant="caption1">
              ORDER DATE
            </Typography>
            <Typography color={theme.palette.highEmphasis.main} variant="body4">
              {orderDate}
            </Typography>
          </InnerWrapper>
          <InnerWrapper>
            <Typography color={theme.palette.primary.main} variant="caption1">
              TOTAL
            </Typography>
            <Typography color={theme.palette.highEmphasis.main} variant="body4">
              {`$${total.toFixed(3)}`}
            </Typography>
          </InnerWrapper>
          <InnerWrapper>
            <Typography color={theme.palette.primary.main} variant="caption1">
              STATUS
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '0.25rem' }}>
              {status == 'Confirmed' ? (
                <CheckCircleOutlineIcon
                  sx={{ color: theme.palette.success.main }}
                  fontSize="small"
                />
              ) : (
                <MonetizationOnOutlinedIcon
                  sx={{ color: theme.palette.success.main, marginRight: '4px' }}
                  fontSize="small"
                  data-testid="monetization-icon"
                />
              )}
              <Typography
                color={theme.palette.highEmphasis.main}
                variant="body4"
              >
                {status}
              </Typography>
            </Box>
          </InnerWrapper>
        </Box>
      </InnerBox>
    </OuterWrapper>
  );
};

export default OrderHeaderSection;
