import React from 'react';
import { render, screen } from '@testing-library/react';
import OrderDetails from './';
import { BrowserRouter, useParams } from 'react-router-dom';
import { getOrderById } from '../../services';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

jest.mock('../../services', () => ({
  getOrderById: jest.fn(),
  getProductData: jest.fn(async (searchQuery: string) => {
    const mockResponse = {
      data: [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
      ],
      headers: { 'x-total-count': 2 },
    };
    return mockResponse;
  }),
}));

describe('OrderDetails component', () => {
  const mockOrder = {
    id: 1,
    orderNo: 'ORD-001',
    confirmationNo: 'CONF-001',
    orderDate: '2024-04-09',
    po: 'PO123',
    total: 100.0,
    freightAmt: 10.0,
    status: 'Confirmed',
    orderBy: {
      name: 'Manager XYZ Corp',
      accountNo: '123456',
      salesRepId: 'John Doe',
    },
    shipping: {
      address: '123 Main St Anytown, 12345',
      shippingMethod: 'UPS',
      shippingFrom: 'Chicago',
    },
  };

  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({ id: '1' });
    (getOrderById as jest.Mock).mockResolvedValue(mockOrder);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders order details', async () => {
    render(
      <BrowserRouter>
        <OrderDetails />
      </BrowserRouter>,
    );
    await screen.findByText('ORDER DETAILS');

    expect(screen.getByText('ORD-001')).toBeInTheDocument();
    expect(screen.getByText('CONF-001')).toBeInTheDocument();
    expect(screen.getByText('PO123')).toBeInTheDocument();
    expect(screen.getByText('Confirmed')).toBeInTheDocument();
    expect(screen.getByText('Manager XYZ Corp')).toBeInTheDocument();
    expect(screen.getByText('123 Main St Anytown, 12345')).toBeInTheDocument();
    expect(screen.getByText('UPS')).toBeInTheDocument();
    expect(screen.getByText('Chicago')).toBeInTheDocument();
  });
});
