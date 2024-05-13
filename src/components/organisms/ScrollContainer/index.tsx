import React, { useState, useRef } from 'react';
import { Box } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '../../atoms/IconButton';
import theme from '../../../theme';
import styled from '@emotion/styled';

interface ScrollableContainerProps {
  items: React.ReactNode;
  itemWidth: number;
}

const ContentWrapper = styled(Box)({
  display: 'flex',
  gap: '16px',
  overflowX: 'scroll',
  scrollSnapType: 'x mandatory',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

const ScrollableContainer: React.FC<ScrollableContainerProps> = ({
  items,
  itemWidth,
}) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const innerContainerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (innerContainerRef.current) {
      const scrollPos = innerContainerRef.current.scrollLeft;
      setScrollPosition(scrollPos);
    }
  };

  const scrollRight = () => {
    if (innerContainerRef.current) {
      const newPosition = Math.min(
        scrollPosition + itemWidth,
        innerContainerRef.current.scrollWidth -
          innerContainerRef.current.clientWidth,
      );
      innerContainerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollLeft = () => {
    if (innerContainerRef.current) {
      const newPosition = Math.max(scrollPosition - itemWidth, 0);
      innerContainerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box display="flex" alignItems="center">
      <IconButton
        id={'left-arrow'}
        data-testid={'left-arrow'}
        disableRipple={true}
        onClick={scrollLeft}
        icon={
          <ArrowBackIosIcon
            style={{
              color: theme.palette.primary.main,
              zIndex: 100,
            }}
            fontSize="large"
          />
        }
      />
      <Box sx={{ overflow: 'hidden' }}>
        <ContentWrapper
          data-testid="scroll"
          ref={innerContainerRef}
          onScroll={handleScroll}
        >
          {items}
        </ContentWrapper>
      </Box>
      <IconButton
        id={'right-arrow'}
        data-testid={'right-arrow'}
        disableRipple={true}
        onClick={scrollRight}
        icon={
          <ArrowForwardIosIcon
            style={{
              marginRight: '-10px',
              color: theme.palette.primary.main,
              zIndex: 100,
            }}
            fontSize="large"
          />
        }
      />
    </Box>
  );
};

export default ScrollableContainer;
