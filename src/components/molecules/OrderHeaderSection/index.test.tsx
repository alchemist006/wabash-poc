import React from 'react';
import { render } from '@testing-library/react';
import OrderHeaderSection from '.';

test('renders OrderHeaderSection with valid data', () => {
  const orderDetails = {
    orderNo: 1234,
    status: 'Confirmed',
    orderDate: '2024-04-10',
    total: 250.75,
    conformationNo: 1123456,
  };

  const { getByText } = render(<OrderHeaderSection {...orderDetails} />);

  expect(getByText('ORDER NO.')).toBeInTheDocument();
  expect(getByText('1234')).toBeInTheDocument();
  expect(getByText('STATUS')).toBeInTheDocument();
  expect(getByText('Confirmed')).toBeInTheDocument();
});

test('renders Monetization Icon and Status for other status', () => {
  const orderDetails = {
    orderNo: 5678,
    conformationNo: 9012,
    orderDate: '2024-04-12',
    total: 150.25,
    status: 'Pending',
  };

  const { getByTestId, getByText } = render(
    <OrderHeaderSection {...orderDetails} />,
  );

  const monetizationIcon = getByTestId('monetization-icon');
  const statusText = getByText('Pending');

  expect(monetizationIcon).toBeInTheDocument();
  expect(statusText).toBeInTheDocument();
  expect(monetizationIcon.tagName).toBe('svg');
});
