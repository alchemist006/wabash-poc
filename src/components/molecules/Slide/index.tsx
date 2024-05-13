import { styled } from '@mui/material';
import React from 'react';
import Typography from '../../atoms/Typography';
import theme from '../../../theme';
import Button from '../../atoms/Button';

interface ISlideProps {
  slideBgImage: string;
  headText?: string;
  subtitle?: string;
  onClick?: () => void;
  buttonLabel?: string;
}

const Section = styled('div')(({ slideBgImage }: ISlideProps) => ({
  backgroundImage: `url(${slideBgImage})`,
  padding: '6rem 2rem 16rem 4.75rem',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'left',
  gap: '1.5rem',
}));

const StyledSubtitle = styled(Typography)({
  marginBottom: '2rem',
});

const StyledButton = styled(Button)({
  padding: '0.75rem 2rem',
});

const Slide: React.FC<ISlideProps> = ({
  slideBgImage,
  headText,
  subtitle,
  onClick,
  buttonLabel,
}) => {
  return (
    <Section slideBgImage={slideBgImage}>
      <Typography color={theme.palette.white.main} variant={'h1'}>
        {headText}
      </Typography>
      <StyledSubtitle color={theme.palette.white.main} variant={'h2'}>
        {subtitle}
      </StyledSubtitle>
      <div>
        <StyledButton
          labelColor={theme.palette.icons.light}
          onClick={onClick}
          backgroundColor={theme.palette.white.main}
          hoverbackgroundColor={'transparent'}
          hoverColor={theme.palette.white.main}
          variant={'contained'}
          labelVariant={'subtitle3'}
        >
          {buttonLabel}
        </StyledButton>
      </div>
    </Section>
  );
};

export default Slide;
