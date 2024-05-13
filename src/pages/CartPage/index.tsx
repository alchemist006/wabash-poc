import React, { useState } from 'react';
import MainTemplate from '../../../src/components/templates/MainTemplate';
import CustomFooter from '../../components/organisms/Footer';
import { Box, styled } from '@mui/material';
import Typography from '../../components/atoms/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import theme from '../../theme';
import { BACK } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';
import CartCard from '../../components/molecules/CartCard';
import SignedHeader from '../../components/organisms/SignedHeader';
import SummaryCard from '../../components/molecules/SummaryCard';
import { useCartContext } from '../../context';

const BackButtonWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  cursor: 'pointer',
});

const SummaryCardWrapper = styled(Box)({
  flex: 0.3,
  '@media(max-width:848px)': { flex: 1 },
});

const InnerContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  flex: 1,
});
const OuterContainer = styled(Box)({
  display: 'flex',
  gap: '100px',
  justifyContent: 'space-between',
  padding: '30px 50px 70px 100px',
  flexWrap: 'wrap',
});
const HeaderContainer = styled(Box)({
  background: theme.palette.primary.light,
  padding: '50px 0px 50px 100px',
});

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, handleRemoveItem, handleUpdateQuantity } = useCartContext();
  const { products } = cart;
  const [value, setValue] = useState(0);
  const handleInputChange = (value: number, id: number) => {
    setValue(value);
    handleUpdateQuantity({ value, id });
  };

  const subtotal = products.reduce(
    (acc, prod) => acc + (prod?.count ?? 0) * prod.price,
    0,
  );
  const CardContent = () => {
    return (
      <>
        <HeaderContainer>
          <Typography color={theme.palette.white.main} variant="h3">
            YOUR CART {`(${products.length})`}
          </Typography>
        </HeaderContainer>
        <OuterContainer>
          <InnerContainer>
            <Box>
              <BackButtonWrapper onClick={() => navigate(-1)}>
                <ArrowBackIcon sx={{ color: theme.palette.icons.dark }} />
                <Typography
                  color={theme.palette.icons.dark}
                  variant="subtitle4"
                >
                  {BACK}
                </Typography>
              </BackButtonWrapper>
            </Box>
            {products.map((prod) => {
              return (
                <CartCard
                  key={prod.id}
                  part_number={prod.part_number}
                  manufacturer={prod.manufacturer}
                  total={prod.price * (prod?.count ?? 0)}
                  price={prod.price}
                  handleRemoveProduct={() => handleRemoveItem(prod.id)}
                  value={prod?.count ?? 0}
                  handleOnChange={(value) => handleInputChange(value, prod.id)}
                />
              );
            })}
          </InnerContainer>
          <SummaryCardWrapper>
            <SummaryCard subtotal={subtotal} savings={0} />
          </SummaryCardWrapper>
        </OuterContainer>
      </>
    );
  };

  return (
    <MainTemplate
      footer={<CustomFooter />}
      content={<CardContent />}
      header={<SignedHeader productLength={products.length} />}
    />
  );
};

export default CartPage;
