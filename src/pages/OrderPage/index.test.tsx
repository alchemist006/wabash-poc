import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import OrderPage from './';
import {
  CONTACT_1,
  CONTACT_2,
  MANAGE_ORDERS,
  ORDERS_TABS,
} from '../../utils/constants';
import { BrowserRouter } from 'react-router-dom';
import { getAllOrders, getAllInvoices } from '../../services';
import { InvoiceType, ORDER } from '../../utils/types';

jest.mock('../../services', () => ({
  getAllInvoices: jest.fn(),
  getAllOrders: jest.fn(),
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

describe('OrderPage component', () => {
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
  const mockInvoices: InvoiceType[] = [
    {
      id: 1,
      invoiceNo: 'INV-001',
      invoiceDate: '2024-04-09',
      po: 'PO123',
      shipTo: '123 Main St Anytown, 12345',
      shipFrom: 'Chicago',
      total: 100,
      freightAmount: '$10.00',
      terms: 'Net 30',
      orderBy: {
        name: 'Manager XYZ Corp',
        accountNo: '123456',
        salesRepId: 'John Doe',
        orderNo: 54321,
      },
      shipping: {
        shippingMethod: 'UPS',
        shippingFrom: 'Chicago',
      },
    },
  ];

  beforeEach(() => {
    (getAllOrders as jest.Mock).mockResolvedValue({
      data: mockOrders,
      count: 1,
    });
    (getAllInvoices as jest.Mock).mockResolvedValue({
      data: mockInvoices,
      count: 1,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  test('renders manage orders text', () => {
    render(
      <BrowserRouter>
        <OrderPage />
      </BrowserRouter>,
    );
    const manageOrdersText = screen.getByText(MANAGE_ORDERS);
    expect(manageOrdersText).toBeInTheDocument();
  });

  test('renders contact information', () => {
    render(
      <BrowserRouter>
        <OrderPage />
      </BrowserRouter>,
    );
    const contact1Text = screen.getByText(CONTACT_1);
    const contact2Text = screen.getByText(CONTACT_2);
    expect(contact1Text).toBeInTheDocument();
    expect(contact2Text).toBeInTheDocument();
  });

  test('renders order table', () => {
    render(
      <BrowserRouter>
        <OrderPage />
      </BrowserRouter>,
    );
    const orderTable = screen.getByTestId('order-table');
    expect(orderTable).toBeInTheDocument();
    const invoiceTab = screen.getByText(ORDERS_TABS[1]);
    fireEvent.click(invoiceTab);
    const invoiceTable = screen.getByTestId('invoice-table');
    expect(invoiceTable).toBeInTheDocument();
  });
});
