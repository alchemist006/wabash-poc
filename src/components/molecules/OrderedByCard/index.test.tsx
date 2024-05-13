import React from 'react';
import { render } from '@testing-library/react';
import OrderedByCard from '.';

const mockCardData = {
  part_name: 'Sample Part',
  accountNo: 123456,
  salesRepId: 'SR123',
  po: 'PO123',
  orderNo: 789,
  invoice: true,
};

const mockCardDataNoInvoice = {
  part_name: 'Another Part',
  accountNo: 987654,
  salesRepId: 'SR456',
  invoice: false,
};

describe('OrderedByCard Component', () => {
  it('renders card with invoice details', () => {
    const { getByText } = render(<OrderedByCard {...mockCardData} />);

    expect(getByText('Sample Part')).toBeInTheDocument();

    expect(getByText('ACCOUNT NO.')).toBeInTheDocument();
    expect(getByText('123456')).toBeInTheDocument();

    expect(getByText('SALES REP ID')).toBeInTheDocument();
    expect(getByText('SR123')).toBeInTheDocument();

    expect(getByText('PO')).toBeInTheDocument();
    expect(getByText('PO123')).toBeInTheDocument();
    expect(getByText('ORDER NO')).toBeInTheDocument();
    expect(getByText('789')).toBeInTheDocument();
  });

  it('renders card without invoice details', () => {
    const { getByText, queryByText } = render(
      <OrderedByCard {...mockCardDataNoInvoice} />,
    );

    expect(getByText('Another Part')).toBeInTheDocument();

    expect(getByText('ACCOUNT NO.')).toBeInTheDocument();
    expect(getByText('987654')).toBeInTheDocument();

    expect(getByText('SALES REP ID')).toBeInTheDocument();
    expect(getByText('SR456')).toBeInTheDocument();

    expect(queryByText('PO')).toBeNull();
    expect(queryByText('ORDER NO')).toBeNull();
  });
});
