import { Box } from '@mui/material';
import React from 'react';
import Typography from '../../atoms/Typography';
import Button from '../../atoms/Button';
import theme from '../../../theme';
import styled from '@emotion/styled';

interface IHeroSectionProps {
  caption?: string;
  heading: string;
  description: string;
  showButton?: boolean;
  defaultImage: string;
  fallBackImage: string;
}
const HedaingWrapper = styled(Box)({
  paddingBottom: '35px',
  maxWidth: '550px',
});
const DescriptionWrapper = styled(Box)({
  maxWidth: '658px',
  paddingBottom: '30px',
});

const InnerLayout = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  '@media(max-width: 400px)': {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
const DefaultImageWrapper = styled(Box)(
  ({ defaultImage }: { defaultImage: string }) => ({
    background: `url(${defaultImage}) center center`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: '30px 90px',
    '@media(max-width: 400px)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px 20px',
      background:
        'linear-gradient(140deg, rgb(0, 75, 185), rgb(0, 58, 131), rgb(0, 47, 95))',
    },
    '@media(max-width: 827px)': {
      padding: '20px 40px',
    },
  }),
);
const FallBackImageWrapper = styled(Box)(
  ({ fallBackImage }: { fallBackImage: string }) => ({
    '@media(max-width: 400px)': {
      background: `url(${fallBackImage}) center center`,
      aspectRatio: 25 / 10,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
  }),
);
const OuterLayout = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
});

const HeroSection = ({
  caption,
  heading,
  description,
  showButton,
  defaultImage,
  fallBackImage,
}: IHeroSectionProps) => {
  return (
    <OuterLayout>
      <FallBackImageWrapper
        fallBackImage={fallBackImage}
        data-testid={'fallback-image-wrapper'}
      />
      <DefaultImageWrapper
        defaultImage={defaultImage}
        data-testid={'default-image-wrapper'}
      >
        <InnerLayout>
          <Typography
            variant="h3"
            color={theme.palette.accent.yellow}
            sx={{
              '@media (max-width: 795px)': {
                fontSize: 20,
              },
              paddingBottom: '10px',
            }}
          >
            {caption}
          </Typography>

          <HedaingWrapper>
            <Typography
              variant="h1"
              color={theme.palette.white.main}
              sx={{
                '@media (max-width: 795px)': {
                  fontSize: 24,
                },
              }}
            >
              {heading}
            </Typography>
          </HedaingWrapper>
          <DescriptionWrapper>
            <Typography variant="body2" color={theme.palette.white.main}>
              {description}
            </Typography>
          </DescriptionWrapper>
          {showButton && (
            <Button
              variant="contained"
              labelColor={theme.palette.primary.main}
              backgroundColor={theme.palette.white.main}
              hoverbackgroundColor={theme.palette.primary.main}
              hoverColor={theme.palette.white.main}
              labelVariant="subtitle3"
              style={{ width: '104px', height: '44px' }}
            >
              VIEW
            </Button>
          )}
        </InnerLayout>
      </DefaultImageWrapper>
    </OuterLayout>
  );
};

export default HeroSection;
