import React from 'react';
import { render } from '@testing-library/react';
import ShippingCard from './';

describe('ShippingCard component', () => {
  test('renders with provided props', () => {
    const shippingMethod = 'Standard';
    const shippingFrom = 'Warehouse A';
    const freightAmt = '$10.00';
    const address = '123 Shipping St';

    const { getByText } = render(
      <ShippingCard
        shippingMethod={shippingMethod}
        shippingFrom={shippingFrom}
        freightAmt={freightAmt}
        address={address}
      />,
    );

    expect(getByText('SHIPPING')).toBeInTheDocument();
    expect(getByText(address)).toBeInTheDocument();
    expect(getByText('SHIPPING METHOD')).toBeInTheDocument();
    expect(getByText(shippingMethod)).toBeInTheDocument();
    expect(getByText('SHIPPING FROM')).toBeInTheDocument();
    expect(getByText(shippingFrom)).toBeInTheDocument();
    expect(getByText('FREIGHT AMT')).toBeInTheDocument();
    expect(getByText(freightAmt)).toBeInTheDocument();
  });
});
