import React from 'react';
import Typography from '../../atoms/Typography';
import { Box } from '@mui/material';
import theme from '../../../theme';
import styled from '@emotion/styled';

export interface PaymentCardProps {
  numberData: { label: string; value: number }[];
  stringData: { label: string; value: string };
  invoice?: boolean;
}

const OuterBox = styled(Box)({
  border: `1px solid ${theme.palette.stroke.light}`,
  padding: '20px',
});

const InvoiceOuterBox = styled(Box)({
  padding: '20px',
});

const InnerBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
});

const BottomBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: '15px',
});

const LabelBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

const formatLabel = (label: string) =>
  label
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const PaymentCard = ({ numberData, stringData, invoice }: PaymentCardProps) => {
  const totalAmount = numberData.reduce((acc, item) => acc + item.value, 0);

  const renderItems = (data: { label: string; value: number }[]) =>
    data.map((item) => (
      <InnerBox key={item.label}>
        <Typography variant="body4" color={theme.palette.highEmphasis.main}>
          {formatLabel(item.label)}
        </Typography>
        <Typography variant="body4" color={theme.palette.highEmphasis.main}>
          ${item.value.toFixed(3)}
        </Typography>
      </InnerBox>
    ));

  return invoice ? (
    <InvoiceOuterBox>
      <LabelBox>{renderItems(numberData)}</LabelBox>
      <BottomBox>
        <Typography variant="body3" color={''}>
          Total:
        </Typography>
        <Typography variant="body3" color={''}>
          ${totalAmount.toFixed(3)}
        </Typography>
      </BottomBox>
    </InvoiceOuterBox>
  ) : (
    <OuterBox>
      <Typography
        variant="body1"
        sx={{ paddingBottom: '25px' }}
        color={theme.palette.highEmphasis.main}
      >
        PAYMENT
      </Typography>
      <LabelBox>
        <InnerBox>
          <Typography variant="body4" color={theme.palette.highEmphasis.main}>
            {stringData.label}
          </Typography>
          <Typography variant="body4" color={theme.palette.highEmphasis.main}>
            {stringData.value}
          </Typography>
        </InnerBox>
        {renderItems(numberData)}
      </LabelBox>
      <BottomBox>
        <Typography variant="body3" color={''}>
          Total:
        </Typography>
        <Typography variant="body3" color={''}>
          ${totalAmount.toFixed(3)}
        </Typography>
      </BottomBox>
    </OuterBox>
  );
};

export default PaymentCard;
