import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Orders from './';
import { getAllOrders } from '../../../services';
import { ORDER } from '../../../utils/types';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../../services', () => ({
  getAllOrders: jest.fn(),
}));

describe('Orders component', () => {
  const mockOrders: ORDER[] = [
    {
      id: 1,
      orderNo: 'ORD-001',
      confirmationNo: 'CONF-001',
      orderDate: '2024-04-09',
      po: 'PO123',
      total: 100,
      freightAmt: '$10.00',
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
      productIds: [],
    },
  ];

  beforeEach(() => {
    (getAllOrders as jest.Mock).mockResolvedValue({
      data: mockOrders,
      count: 1,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders order table with data', async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Orders />
      </BrowserRouter>,
    );
    const orderTable = getByTestId('order-table');
    expect(orderTable).toBeInTheDocument();
  });

  test('calls getAllOrders on component mount', async () => {
    render(
      <BrowserRouter>
        <Orders />
      </BrowserRouter>,
    );
    expect(getAllOrders).toHaveBeenCalledWith(0, 0);
  });
});

describe('getAllOrders service', () => {
  test('fetches all orders when pageNumber and pageSize are 0', async () => {
    const mockData: ORDER[] = [
      {
        id: 1,
        orderNo: 'ORD-001',
        confirmationNo: 'CONF-001',
        orderDate: '2024-04-09',
        po: 'PO123',
        total: 100,
        freightAmt: '$10.00',
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
        productIds: [],
      },
    ];

    const result = await getAllOrders(0, 0);

    expect(result.data).toEqual(mockData);
    expect(result.count).toEqual(1);
  });
});
