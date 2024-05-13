import React, { useState } from 'react';
import MainTemplate from '../../components/templates/MainTemplate';
import GlobalSection from '../../components/atoms/GlobalSection';
import { styled } from '@mui/material';
import CustomFooter from '../../components/organisms/Footer';
import SignedHeader from '../../components/organisms/SignedHeader';
import OrderTable from '../../components/organisms/OrderTable';
import theme from '../../theme';
import Typography from '../../components/atoms/Typography';
import {
  CONTACT_1,
  CONTACT_2,
  MANAGE_ORDERS,
  ORDERS_TABS,
} from '../../utils/constants';
import LinkTabs from '../../components/molecules/Tabs';
import InvoiceTable from '../../components/organisms/InvoiceTable';
import { useCartContext } from '../../context';

const ContentMainContianer = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const ActionsSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const VFlex = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const OrderPage = () => {
  const { cart } = useCartContext();
  const [selectedTabState, setSelectedTabState] = useState<string>('orders');
  const handleTabClick = (value: string) => {
    setSelectedTabState(value);
  };

  const Content = () => {
    return (
      <ContentMainContianer>
        <GlobalSection
          containerWidth="90%"
          sectionPadding="1rem 0 0 0"
          sectionBgColor={theme.palette.backgroundElevation.light}
        >
          <ActionsSection>
            <Typography color={theme.palette.highEmphasis.main} variant={'h3'}>
              {MANAGE_ORDERS}
            </Typography>
            <VFlex>
              <Typography
                color={theme.palette.highEmphasis.main}
                variant={'caption1'}
              >
                {CONTACT_1}
              </Typography>
              <Typography
                color={theme.palette.highEmphasis.main}
                variant={'body4'}
              >
                {CONTACT_2}
              </Typography>
            </VFlex>
            <LinkTabs
              tabNames={ORDERS_TABS}
              onClick={handleTabClick}
              selectedValue={selectedTabState}
            />
          </ActionsSection>
        </GlobalSection>
        {selectedTabState == 'orders' ? (
          <GlobalSection containerWidth="90%" sectionPadding="4rem 0">
            <OrderTable />
          </GlobalSection>
        ) : (
          <GlobalSection containerWidth="90%" sectionPadding="4rem 0">
            <InvoiceTable />
          </GlobalSection>
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

export default OrderPage;
