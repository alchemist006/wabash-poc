import React from 'react';
import MainTemplate from '../../components/templates/MainTemplate';
import Header from '../../components/organisms/Header';
import GlobalSection from '../../components/atoms/GlobalSection';
import { Box, styled } from '@mui/material';
import {
  BANNER_QUOTE_AUTHOR,
  CORE_VALE_CARDS_DATA,
  END_QUOTE,
  FEATURED_PRODUCTS,
  HOME_BANNER_HEAD_TEXT,
  PRODUCT_CARDS_DATA,
  SIGNIN_SECTION_TEXT,
  SIGN_IN,
  SLIDER_DATA,
  START_QUOTE,
} from '../../utils/constants';
import CardMolecule from '../../components/molecules/CoreValueCard';
import HomeCarousel from '../../components/organisms/HomeCarousel';
import Typography from '../../components/atoms/Typography';
import theme from '../../theme';
import UptoDateSection from '../../components/molecules/UpToDate';
import BannerBgImage from '../../../public/assets/images/home-page-banner.png';
import Button from '../../components/atoms/Button';
import ProductCard from '../../components/molecules/ProductCard';
import CustomFooter from '../../components/organisms/Footer';
import ScrollableContainer from '../../components/organisms/ScrollContainer';

const ContentMainContianer = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const AccentCardContianer = styled('div')({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(15.875rem, 25rem))',
  alignItems: 'center',
  gap: '1rem',
  justifyContent: 'center',
});

const CardWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

const Banner = styled('div')({
  backgroundImage: `url(${BannerBgImage})`,
  padding: '7.75rem',
  backgroundSize: '100% 100%',
});
const BannerTextWrapper = styled('div')({
  maxWidth: '43%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '1rem',
});

const InlineTypogarphy = styled(Typography)({
  display: 'inline',
  margin: '0 1rem ',
});
const BannerTypogarphy = styled(Typography)({
  display: 'inline',
});

const ProductActionContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1.5rem',
  margin: '5rem 0',
  width: '100%',
  alignItems: 'center',
});

const HeadTypogarphy = styled(Typography)({
  margin: '2rem 2.5rem',
});

const ProductContent = () => {
  return (
    <>
      {PRODUCT_CARDS_DATA.map((prod) => (
        <Box
          key={prod.id}
          sx={{
            minWidth: '315px',
            scrollSnapAlign: 'start',
          }}
        >
          <ProductCard
            productName={prod.productName}
            productNumber={prod.productNumber}
            product={prod.product}
            image={prod.icon}
          />
        </Box>
      ))}
    </>
  );
};

const HomePage = () => {
  const Content = () => {
    return (
      <ContentMainContianer>
        <HomeCarousel items={SLIDER_DATA} />
        <GlobalSection containerWidth="90%" sectionPadding="3.75rem 0">
          <AccentCardContianer>
            {CORE_VALE_CARDS_DATA.map((card, index) => {
              return (
                <CardWrapper
                  key={'core_values_card_' + index}
                  data-testid={'core-value-card'}
                >
                  <CardMolecule
                    src={card.icon}
                    heading={card.headText}
                    title={card.subText}
                  />
                </CardWrapper>
              );
            })}
          </AccentCardContianer>
        </GlobalSection>
        <GlobalSection
          containerWidth="90%"
          sectionPadding="1.875rem 0"
          sectionBgColor={theme.palette.backgroundElevation.light}
        >
          <HeadTypogarphy
            color={theme.palette.highEmphasis.main}
            variant={'h3'}
          >
            {FEATURED_PRODUCTS}
          </HeadTypogarphy>
          <ScrollableContainer itemWidth={315} items={<ProductContent />} />

          <ProductActionContainer>
            <div>
              <Button
                variant={'outlined'}
                labelVariant="subtitle3"
                hoverbackgroundColor={theme.palette.primary.main}
                hoverColor={theme.palette.white.main}
                labelColor={theme.palette.primary.main}
                sx={{
                  padding: '12px 32px',
                }}
                onClick={() => {}}
              >
                {SIGN_IN}
              </Button>
            </div>
            <Typography
              color={theme.palette.highEmphasis.main}
              variant={'subtitle2'}
            >
              {SIGNIN_SECTION_TEXT}
            </Typography>
          </ProductActionContainer>
        </GlobalSection>
        <Banner>
          <BannerTextWrapper>
            <BannerTypogarphy color={theme.palette.white.main} variant={'h3'}>
              <InlineTypogarphy
                color={theme.palette.accent.yellow}
                variant={'h1'}
              >
                {START_QUOTE}
              </InlineTypogarphy>

              {HOME_BANNER_HEAD_TEXT}
              <InlineTypogarphy
                color={theme.palette.accent.yellow}
                variant={'h1'}
              >
                {END_QUOTE}
              </InlineTypogarphy>
            </BannerTypogarphy>
            <Typography color={theme.palette.white.main} variant={'subtitle2'}>
              {BANNER_QUOTE_AUTHOR}
            </Typography>
          </BannerTextWrapper>
        </Banner>
        <GlobalSection
          containerWidth="90%"
          sectionPadding="6.25rem 0"
          sectionBgColor={theme.palette.backgroundElevation.light}
        >
          <UptoDateSection />
        </GlobalSection>
      </ContentMainContianer>
    );
  };
  return (
    <MainTemplate
      footer={<CustomFooter />}
      content={<Content />}
      header={<Header />}
    />
  );
};

export default HomePage;
