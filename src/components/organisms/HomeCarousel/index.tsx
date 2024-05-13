import React, { useState } from 'react';
import { IconButton, styled } from '@mui/material';
import Slide from '../../molecules/Slide';
import { SlideProps } from '../../../utils/types';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import theme from '../../../theme';

const CarouselContainer = styled('div')({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
});

const CarouselTrack = styled('div')({
  display: 'flex',
  transition: 'transform 0.5s ease',
  width: '100%',
});

const DotContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  bottom: '4rem',
  left: '4.75rem',
  zIndex: 10,
  alignItems: 'center',
});

const Dot = styled('div')(({ active }: { active: boolean }) => ({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  margin: '0 4px',
  backgroundColor: active ? 'yellow' : 'white',
  opacity: active ? 1 : 0.7,
}));

const StyledIconButton = styled(IconButton)({
  fontSize: '24px',
});

interface CarouselProps {
  items: SlideProps[];
}

const HomeCarousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <CarouselContainer data-testid={'carousel'}>
      <CarouselTrack
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((slideData, index) => {
          return (
            <div
              key={index}
              style={{
                flex: '0 0 100%',
                justifyContent: 'center',
              }}
            >
              <Slide
                key={'slide' + index}
                slideBgImage={slideData.bgImage}
                headText={slideData.headText}
                subtitle={slideData.subText}
                buttonLabel={slideData.buttonLabel}
                onClick={slideData.onClick}
              />
            </div>
          );
        })}
      </CarouselTrack>
      <DotContainer>
        <StyledIconButton
          aria-label="Previous"
          disableRipple={true}
          onClick={handlePrev}
        >
          <ArrowBackIosIcon
            style={{ color: theme.palette.white.main }}
            fontSize="inherit"
          />
        </StyledIconButton>
        {items.map((_, index) => (
          <Dot key={index} active={index === currentIndex} />
        ))}
        <StyledIconButton
          aria-label="Next"
          onClick={handleNext}
          disableRipple={true}
        >
          <ArrowForwardIosIcon
            style={{ color: theme.palette.white.main }}
            fontSize="inherit"
          />
        </StyledIconButton>
      </DotContainer>
    </CarouselContainer>
  );
};

export default HomeCarousel;
