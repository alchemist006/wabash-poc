import * as React from 'react';
import { Box, Divider, styled } from '@mui/material';
import Typography from '../../atoms/Typography';
import Button from '../../atoms/Button';
import theme from '../../../theme';
import { CONTINUE_BUTTON, REQUEST_BUTTON } from '../../../utils/constants';
interface SummaryCardProps {
  subtotal: number;
  savings: number;
}
const SummaryCardContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '30px',
});

const RowContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '10px',
});

const DownContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});
const OuterContainer = styled(Box)({
  border: `1px solid ${theme.palette.stroke.light}`,
  width: '100%',
});

const SummaryCard = ({ subtotal, savings }: SummaryCardProps) => {
  return (
    <OuterContainer>
      <SummaryCardContainer>
        <Typography color={''} variant="body1">
          ORDER SUMMARY
        </Typography>
        <Box sx={{ marginBottom: '25px' }}>
          <RowContainer>
            <Typography color={''} variant="body4">
              Subtotal
            </Typography>
            <Typography color={''} variant="body4">
              ${subtotal.toFixed(3)}
            </Typography>
          </RowContainer>
          <RowContainer>
            <Typography color={''} variant="body4">
              Savings
            </Typography>
            <Typography color={''} variant="body4">
              ${savings.toFixed(3)}
            </Typography>
          </RowContainer>
        </Box>
        <Divider />
        <DownContainer>
          <Button
            labelColor={theme.palette.white.main}
            backgroundColor={theme.palette.primary.main}
            labelVariant="subtitle3"
            hoverColor={theme.palette.primary.main}
            hoverbackgroundColor={theme.palette.white.main}
            style={{ padding: '0.75rem 2rem', maxWidth: '130px' }}
          >
            {CONTINUE_BUTTON}
          </Button>
          <Button
            labelColor={theme.palette.primary.main}
            backgroundColor={theme.palette.white.main}
            variant="outlined"
            labelVariant="subtitle3"
            style={{ padding: '0.75rem 2rem', maxWidth: '200px' }}
          >
            {REQUEST_BUTTON}
          </Button>
        </DownContainer>
      </SummaryCardContainer>
    </OuterContainer>
  );
};

export default SummaryCard;
