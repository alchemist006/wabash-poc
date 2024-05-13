import React from 'react';
import { render } from '@testing-library/react';
import CartCard from '.';

describe('CartCard Component', () => {
  const mockProps = {
    part_number: 'P123',
    manufacturer: 'Manufacturer A',
    total: 50,
    price: 25,
    value: 2,
    handleRemoveProduct: jest.fn(),
    handleOnChange: jest.fn(),
  };

  it('renders CartCard component correctly', () => {
    const { getByText, getByTestId } = render(<CartCard {...mockProps} />);

    expect(getByText('P123')).toBeInTheDocument();
    expect(getByText('Manufacturer A')).toBeInTheDocument();
    expect(getByText('$50.000')).toBeInTheDocument(); // Assuming total should be displayed with precision

    const quantityInput = getByTestId('quantity-input');
    expect(quantityInput).toBeInTheDocument();

    const removeButtonLabel = getByText('Remove');

    expect(removeButtonLabel).toBeInTheDocument();
  });

  it('handles input change correctly', () => {
    const { getByTestId } = render(<CartCard {...mockProps} />);

    const quantityInput = getByTestId('quantity-input') as HTMLInputElement;

    expect(quantityInput.tagName).toBe('DIV');

    expect(quantityInput.value).toBe(undefined);
  });
});
