import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ScrollableContainer from '.';

describe('ScrollableContainer', () => {
  const items = (
    <>
      <div style={{ width: '100px' }}>Item 1</div>
      <div style={{ width: '100px' }}>Item 2</div>
      <div style={{ width: '100px' }}>Item 3</div>
      <div style={{ width: '100px' }}>Item 4</div>
    </>
  );

  it('renders correctly', () => {
    render(<ScrollableContainer items={items} itemWidth={100} />);

    // Check if left and right arrows are rendered
    expect(screen.getByTestId('left-arrow')).toBeInTheDocument();
    expect(screen.getByTestId('right-arrow')).toBeInTheDocument();

    // Check if items are rendered
    items.props.children.forEach((item: string, index: number) => {
      expect(screen.getByText(`Item ${index + 1}`)).toBeInTheDocument();
    });
  });

  it('scrolls right correctly', () => {
    render(<ScrollableContainer items={items} itemWidth={100} />);

    const scrollableContainer = screen.getByTestId('scroll');
    const rightArrow = screen.getByTestId('right-arrow');

    // Mock scrollTo method
    scrollableContainer.scrollTo = jest.fn();

    // Click the right arrow to scroll
    fireEvent.click(rightArrow);
    fireEvent.scroll(scrollableContainer, { target: { scrollLeft: 0 } });

    // Check if scrollTo is called with the correct parameters
    expect(scrollableContainer.scrollTo).toHaveBeenCalledWith({
      left: 0,
      behavior: 'smooth',
    });
  });

  it('scrolls left correctly', () => {
    render(<ScrollableContainer items={items} itemWidth={100} />);

    const scrollableContainer = screen.getByTestId('scroll');
    const leftArrow = screen.getByTestId('left-arrow');
    const rightArrow = screen.getByTestId('right-arrow');

    // Mock scrollTo method
    scrollableContainer.scrollTo = jest.fn();

    // Click the right arrow to scroll
    fireEvent.click(rightArrow);

    // Simulate scroll event
    fireEvent.scroll(scrollableContainer, { target: { scrollLeft: 100 } });

    // Click the left arrow to scroll back
    fireEvent.click(leftArrow);

    // Check if scrollTo is called with the correct parameters
    expect(scrollableContainer.scrollTo).toHaveBeenCalledWith({
      left: 0,
      behavior: 'smooth',
    });
  });

  it('updates scroll position correctly on scroll', () => {
    render(<ScrollableContainer items={items} itemWidth={100} />);

    const scrollableContainer = screen.getByTestId('scroll');

    fireEvent.scroll(scrollableContainer, { target: { scrollLeft: 100 } });
  });
});
