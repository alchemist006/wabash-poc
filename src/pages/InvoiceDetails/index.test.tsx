import React from 'react';
import { render, screen } from '@testing-library/react';
import InvoiceDetails from './';
import { BrowserRouter, useParams } from 'react-router-dom';
import { getInvoiceById } from '../../services';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

jest.mock('../../services', () => ({
  getInvoiceById: jest.fn(),
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
  const mockInvoice = {
    id: 1,
    invoiceNo: 'INV-001',
    invoiceDate: '2024-04-09',
    po: 'PO123',
    shipTo: '123 Main St Anytown, 12345',
    shipFrom: 'Chicago',
    total: 100.0,
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
  };

  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({ id: '1' });
    (getInvoiceById as jest.Mock).mockResolvedValue(mockInvoice);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders order details', async () => {
    render(
      <BrowserRouter>
        <InvoiceDetails />
      </BrowserRouter>,
    );

    await screen.findByText('INVOICE #INV-001');

    expect(screen.getByText('2024-04-09 | Terms: Net 30')).toBeInTheDocument();
    expect(screen.getByText('UPS')).toBeInTheDocument();
    expect(screen.getByText('Chicago')).toBeInTheDocument();
    expect(screen.getByText('Manager XYZ Corp')).toBeInTheDocument();
  });
});
