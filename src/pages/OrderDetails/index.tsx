import React, { useEffect, useState } from 'react';
import MainTemplate from '../../components/templates/MainTemplate';
import GlobalSection from '../../components/atoms/GlobalSection';
import { styled } from '@mui/material';
import CustomFooter from '../../components/organisms/Footer';
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
import OrderHeaderSection from '../../components/molecules/OrderHeaderSection';
import OrderedByCard from '../../components/molecules/OrderedByCard';
import ShippingCard from '../../components/organisms/ShippingCard';
import PaymentCard from '../../components/molecules/PaymentCard';
import CircularProgressBar from '../../components/atoms/CircularProgressBar';
import OrderDetailCard from '../../components/molecules/OrderedDetailCard';
import Button from '../../components/atoms/Button';
import { getOrderById } from '../../services';
import { ORDER } from '../../utils/types';
import { convertToUpperCase } from '../../utils/formatters';
import { useCartContext } from '../../context';

const MainContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

const ContentMainContianer = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const OrderCardsContainer = styled('div')({
  maxWidth: '100%',
  display: 'grid',
  gridTemplateColumns: '0.5fr 1fr 0.8fr ',
  gap: '1.5rem',
});

const ActionsSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const HFlex = styled('div')({
  display: 'flex',
  flexDirection: 'row',
});

const BackButtonWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  cursor: 'pointer',
});

const SigninWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '0.5rem',
});

const HFlexWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
});

const PartsContainer = styled('div')({
  display: 'flex',
  gap: '1rem',
  flexDirection: 'column',
});

const StyledProgressbarContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  flex: '50vw',
});

const OrderDetails = () => {
  const { cart } = useCartContext();
  const { id = '0' } = useParams();
  const Content = () => {
    const navigate = useNavigate();
    const [data, setData] = useState<ORDER>();
    useEffect(() => {
      const fetchProductDetails = async () => {
        const productData = await getOrderById(parseInt(id));

        setData(productData);
      };
      fetchProductDetails();
    }, []);
    useEffect(() => {}, [data]);
    return (
      <ContentMainContianer>
        {data ? (
          <>
            <GlobalSection containerWidth="90%" sectionPadding="2rem 0">
              <MainContainer>
                <ActionsSection>
                  <BackButtonWrapper onClick={() => navigate(-1)}>
                    <ArrowBackIcon sx={{ color: theme.palette.icons.dark }} />
                    <Typography
                      color={theme.palette.icons.dark}
                      variant="subtitle4"
                    >
                      {BACK}
                    </Typography>
                  </BackButtonWrapper>

                  <HFlex>
                    <Typography
                      color={theme.palette.highEmphasis.main}
                      variant={'h3'}
                    >
                      {'ORDER DETAILS'}
                    </Typography>
                  </HFlex>
                </ActionsSection>
                <OrderHeaderSection
                  orderNo={data?.orderNo}
                  conformationNo={data?.confirmationNo}
                  orderDate={data?.orderDate}
                  total={data?.total}
                  status={data?.status}
                />
                <OrderCardsContainer>
                  <OrderedByCard
                    accountNo={data.orderBy.accountNo}
                    salesRepId={data.orderBy.salesRepId}
                    part_name={data.orderBy.name}
                    invoice={false}
                  />
                  <ShippingCard
                    shippingMethod={data.shipping.shippingMethod}
                    shippingFrom={data.shipping.shippingFrom}
                    freightAmt={data.freightAmt}
                    address={data.shipping.address}
                  />
                  <PaymentCard
                    numberData={[
                      { label: 'subtotal', value: data.total },
                      ...PAYMENT_CARD_DATA,
                    ]}
                    stringData={{ label: 'PO Number', value: data.po }}
                  />
                </OrderCardsContainer>
                <PartsContainer>
                  <Typography
                    color={theme.palette.highEmphasis.main}
                    variant={'h2'}
                  >
                    {'DETAILS'}
                  </Typography>
                  <OrderDetailCard
                    part={'SLIDING LID ID 10X14X1.5"'}
                    partNumber={'JK200'}
                    qty={1}
                    unitPrice={data.total}
                    total={data.total}
                    showXref={false}
                    columns={ORDER_DETAILS_HEADS}
                  />
                </PartsContainer>
              </MainContainer>
            </GlobalSection>
            <GlobalSection
              containerWidth="90%"
              sectionPadding="2rem 0"
              sectionBgColor={theme.palette.backgroundElevation.light}
            >
              <SigninWrapper>
                <Typography
                  color={theme.palette.highEmphasis.main}
                  variant={'body1'}
                >
                  {convertToUpperCase(MODIFY_TEXT)}
                </Typography>
                <HFlexWrapper>
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
                </HFlexWrapper>
              </SigninWrapper>
            </GlobalSection>
          </>
        ) : (
          <StyledProgressbarContainer>
            <CircularProgressBar />
          </StyledProgressbarContainer>
        )}
      </ContentMainContianer>
    );
  };
  return (
    <MainTemplate
      footer={<CustomFooter />}
      content={<Content />}
      header={<SignedHeader productLength={cart.products.length} />}
    />
  );
};

export default OrderDetails;
