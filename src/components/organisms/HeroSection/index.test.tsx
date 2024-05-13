import React from 'react';
import { render } from '@testing-library/react';
import HeroSection from '.';

describe('HeroSection component', () => {
  const defaultProps = {
    heading: 'Test Heading',
    description: 'Test Description',
    defaultImage: 'test-default-image.jpg',
    fallBackImage: 'test-fallback-image.jpg',
  };

  it('renders heading and description correctly', () => {
    const { getByText } = render(<HeroSection {...defaultProps} />);
    expect(getByText('Test Heading')).toBeInTheDocument();
    expect(getByText('Test Description')).toBeInTheDocument();
  });

  it('renders button when showButton prop is true', () => {
    const { getByText } = render(
      <HeroSection {...defaultProps} showButton={true} />,
    );
    expect(getByText('VIEW')).toBeInTheDocument();
  });

  it('renders caption when provided', () => {
    const { getByText } = render(
      <HeroSection {...defaultProps} caption="Test Caption" />,
    );
    expect(getByText('Test Caption')).toBeInTheDocument();
  });

  it('renders default image correctly', () => {
    const { getByTestId } = render(<HeroSection {...defaultProps} />);
    const defaultImageWrapper = getByTestId('default-image-wrapper');
    expect(defaultImageWrapper).toHaveStyle(
      'background: url(test-default-image.jpg) center center',
    );
  });
});
