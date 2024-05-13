import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductListCard from './';

describe('ProductListCard', () => {
  test('renders product card with image and other details', () => {
    const handleClick = jest.fn();
    const cardHash = '123456';
    const cardNumber = '7890';
    const cardName = 'Product Name';
    const image = 'image-url';
    const xref = true;

    render(
      <ProductListCard
        image={image}
        xref={xref}
        CardHash={cardHash}
        handleClick={handleClick}
        CardNumber={cardNumber}
        CardName={cardName}
      />,
    );

    const productImage = screen.getByRole('img');
    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAttribute('src', image);

    const xrefChip = screen.getByText('XREF');
    expect(xrefChip).toBeInTheDocument();

    const cardHashElement = screen.getByText(cardHash);
    expect(cardHashElement).toBeInTheDocument();

    const cardNumberElement = screen.getByText(cardNumber);
    expect(cardNumberElement).toBeInTheDocument();

    const cardNameElement = screen.getByText(cardName);
    expect(cardNameElement).toBeInTheDocument();
  });

  test('renders product card with default image when no image provided', () => {
    const cardHash = '123456';
    const cardNumber = '7890';
    const cardName = 'Product Name';
    const xref = false;

    render(
      <ProductListCard
        CardHash={cardHash}
        CardNumber={cardNumber}
        CardName={cardName}
        xref={xref}
      />,
    );

    const defaultImage = screen.getByAltText('images');
    expect(defaultImage).toBeInTheDocument();
  });
});
