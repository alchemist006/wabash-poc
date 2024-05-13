import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InvoiceTable from './';
import { getAllInvoices } from '../../../services';
import { InvoiceType } from '../../../utils/types';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../../services', () => ({
  getAllInvoices: jest.fn(),
}));

describe('InvoiceTable component', () => {
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
    (getAllInvoices as jest.Mock).mockResolvedValue({
      data: mockInvoices,
      count: 1,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders invoice table with data', async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <InvoiceTable />
      </BrowserRouter>,
    );
    const invoiceTable = getByTestId('invoice-table');
    expect(invoiceTable).toBeInTheDocument();
  });

  test('calls getAllInvoices on component mount', async () => {
    render(
      <BrowserRouter>
        <InvoiceTable />
      </BrowserRouter>,
    );
    expect(getAllInvoices).toHaveBeenCalledWith(0, 0);
  });
});

describe('getAllInvoices service', () => {
  test('fetches all invoices when pageNumber and pageSize are 0', async () => {
    const mockData: InvoiceType[] = [
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

    const result = await getAllInvoices(0, 0);

    expect(result.data).toEqual(mockData);
    expect(result.count).toEqual(1);
  });
});
