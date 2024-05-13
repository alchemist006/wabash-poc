import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from '.';

describe('ProductCard', () => {
  test('renders product card with image and details', () => {
    const productName = 'BRAKE DRUM CENTERFUSE';
    const productNumber = '89996B';
    const product = 'MOTOR WHEEL';
    const image = 'image-url';

    render(
      <ProductCard
        productName={productName}
        productNumber={productNumber}
        product={product}
        image={image}
      />,
    );

    const productNameElement = screen.getByText(productName);
    expect(productNameElement).toBeInTheDocument();

    const productNumberElement = screen.getByText(productNumber);
    expect(productNumberElement).toBeInTheDocument();

    const productElement = screen.getByText(product);
    expect(productElement).toBeInTheDocument();

    const productImage = screen.getByAltText('Image');
    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAttribute('src', image);
  });

  test('renders product card with default image when no image provided', () => {
    const productName = 'BRAKE DRUM CENTERFUSE';
    const productNumber = '89996B';
    const product = 'MOTOR WHEEL';

    render(
      <ProductCard
        productName={productName}
        productNumber={productNumber}
        product={product}
      />,
    );

    const defaultImage = screen.getByAltText('NoImage');
    expect(defaultImage).toBeInTheDocument();
  });
});
