import React, { useEffect, useState } from 'react';
import OrderedByCard from '../../components/molecules/OrderedByCard';
import ShippingCard from '../../components/organisms/ShippingCard';
import PaymentCard from '../../components/molecules/PaymentCard';
import OrderDetailCard from '../../components/molecules/OrderedDetailCard';
import Button from '../../components/atoms/Button';
import SignedHeader from '../../components/organisms/SignedHeader';
import theme from '../../theme';
import Typography from '../../components/atoms/Typography';
import {
  BACK,
  CALL_US,
  CONTACT_MAIl,
  MODIFY_TEXT,
  ORDER_DETAILS_HEADS,
  PAYMENT_CARD_DATA,
  SUPPORT,
} from '../../utils/constants';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom';
import { getInvoiceById } from '../../services';
import { InvoiceType } from '../../utils/types';
import { convertToUpperCase } from '../../utils/formatters';
import MainTemplate from '../../components/templates/MainTemplate';
import GlobalSection from '../../components/atoms/GlobalSection';
import { Box, styled } from '@mui/material';
import CustomFooter from '../../components/organisms/Footer';
import { useCartContext } from '../../context';
import CircularProgressBar from '../../components/atoms/CircularProgressBar';

const StyledOrderCardsContainer = styled('div')({
  maxWidth: '100%',
  display: 'grid',
  gridTemplateColumns: '0.5fr 1fr  0.3fr',
  gap: '1.5rem',
});

const StyledSigninWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '0.5rem',
});

const StyledHFlexWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
});

const StyledContentMainContianer = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const StyledBackButtonWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  cursor: 'pointer',
});

const StyledPartsContainer = styled('div')({
  display: 'flex',
  gap: '1rem',
  flexDirection: 'column',
  justifyContent: 'flex-end',
});

const StyledPriceContainer = styled('div')({
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'flex-end',
});

const StyledActionsSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const StyledMainContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

const StyledInvoiceDetailsWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const InvoiveDetails = () => {
  const { id = '0' } = useParams();
  const { cart } = useCartContext();

  const InvoiceContent = () => {
    const navigate = useNavigate();
    const [invoiceData, setInvoiceData] = useState<InvoiceType>();
    useEffect(() => {
      const fetchProductDetails = async () => {
        const productData = await getInvoiceById(parseInt(id));

        setInvoiceData(productData);
      };
      fetchProductDetails();
    }, []);
    useEffect(() => {}, [invoiceData]);
    return (
      <StyledContentMainContianer>
        {invoiceData ? (
          <>
            <GlobalSection containerWidth="90%" sectionPadding="2rem 0">
              <StyledMainContainer>
                <StyledActionsSection>
                  <StyledBackButtonWrapper onClick={() => navigate(-1)}>
                    <ArrowBackIcon sx={{ color: theme.palette.icons.dark }} />
                    <Typography
                      color={theme.palette.icons.dark}
                      variant="subtitle4"
                    >
                      {BACK}
                    </Typography>
                  </StyledBackButtonWrapper>
                  <StyledInvoiceDetailsWrapper>
                    <div>
                      <Typography
                        color={theme.palette.highEmphasis.main}
                        variant="body1"
                      >
                        {`INVOICE #${invoiceData.invoiceNo}`}
                      </Typography>
                      <div style={{ marginTop: '0.25rem' }}>
                        <Typography
                          color={theme.palette.highEmphasis.main}
                          variant="body4"
                        >
                          {`${invoiceData.invoiceDate} | Terms: ${invoiceData.terms}`}
                        </Typography>
                      </div>
                    </div>
                    <Box sx={{ width: '10%' }}>
                      <Typography
                        color={theme.palette.highEmphasis.main}
                        variant="body4"
                      >
                        {invoiceData.shipTo}
                      </Typography>
                    </Box>
                  </StyledInvoiceDetailsWrapper>
                </StyledActionsSection>
                <StyledOrderCardsContainer>
                  <OrderedByCard
                    accountNo={invoiceData.orderBy.accountNo}
                    salesRepId={invoiceData.orderBy.salesRepId}
                    part_name={invoiceData.orderBy.name}
                    invoice={true}
                  />
                  <ShippingCard
                    shippingMethod={invoiceData.shipping.shippingMethod}
                    shippingFrom={invoiceData.shipping.shippingFrom}
                    freightAmt={invoiceData.freightAmount}
                    address={invoiceData.shipTo}
                  />
                </StyledOrderCardsContainer>
                <StyledPartsContainer>
                  <Typography
                    color={theme.palette.highEmphasis.main}
                    variant={'h2'}
                  >
                    {'DETAILS'}
                  </Typography>
                  <OrderDetailCard
                    part={'SLIDING LID ID 10X14X1.5"'}
                    partNumber={'JK500'}
                    qty={1}
                    unitPrice={invoiceData.total}
                    total={invoiceData.total}
                    showXref={true}
                    columns={ORDER_DETAILS_HEADS}
                  />
                  <StyledPriceContainer>
                    <div style={{ width: '500px' }}>
                      <PaymentCard
                        numberData={[
                          { label: 'subtotal', value: invoiceData.total },
                          ...PAYMENT_CARD_DATA,
                        ]}
                        stringData={{
                          label: 'PO Number',
                          value: invoiceData.po,
                        }}
                        invoice={true}
                      />
                    </div>
                  </StyledPriceContainer>
                </StyledPartsContainer>
              </StyledMainContainer>
            </GlobalSection>
            <GlobalSection
              containerWidth="90%"
              sectionPadding="2rem 0"
              sectionBgColor={theme.palette.backgroundElevation.light}
            >
              <StyledSigninWrapper>
                <Typography
                  color={theme.palette.highEmphasis.main}
                  variant={'body1'}
                >
                  {convertToUpperCase(MODIFY_TEXT)}
                </Typography>
                <StyledHFlexWrapper>
                  <Typography
                    color={theme.palette.highEmphasis.main}
                    variant={'subtitle2'}
                  >
                    {CALL_US}
                  </Typography>
                  <Button
                    labelVariant="subtitle2"
                    onClick={() => {}}
                    labelColor={theme.palette.primary.main}
                    variant="text"
                    hoverColor={theme.palette.primary.main}
                  >
                    {CONTACT_MAIl}
                  </Button>
                  <Typography
                    color={theme.palette.highEmphasis.main}
                    variant={'subtitle2'}
                  >
                    {SUPPORT}
                  </Typography>
                </StyledHFlexWrapper>
              </StyledSigninWrapper>
            </GlobalSection>
          </>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              flex: '50vw',
            }}
          >
            <CircularProgressBar />
          </div>
        )}
      </StyledContentMainContianer>
    );
  };
  return (
    <MainTemplate
      footer={<CustomFooter />}
      content={<InvoiceContent />}
      header={<SignedHeader productLength={cart.products.length} />}
    />
  );
};

export default InvoiveDetails;
