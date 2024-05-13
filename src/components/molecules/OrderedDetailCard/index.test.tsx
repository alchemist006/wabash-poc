import React from 'react';
import { render } from '@testing-library/react';
import OrderDetailCard, { OrderDetailProps } from '.';

const testProps = {
  image: 'path_to_image.jpg',
  part: 'Sample Part',
  partNumber: '123456',
  qty: 2,
  unitPrice: 10.99,
  total: 21.98,
  showXref: true,
  columns: ['Part Number', 'Qty', 'Unit Price', 'Total'],
};

const mockColumns = ['Part', 'Part Number', 'Quantity', 'Unit Price', 'Total'];

const renderOrderDetailCard = (props: OrderDetailProps) => {
  return render(<OrderDetailCard {...props} />);
};

describe('OrderDetailCard Component', () => {
  it('renders order detail card with correct data', () => {
    const { getByText, getByAltText } = renderOrderDetailCard({
      image: 'mock_image_url',
      part: 'Mock Part',
      partNumber: '123456',
      qty: 3,
      unitPrice: 25.0,
      total: 75.0,
      showXref: true,
      columns: mockColumns,
    });

    expect(getByText('Part')).toBeInTheDocument();
    expect(getByText('Part Number')).toBeInTheDocument();
    expect(getByText('Quantity')).toBeInTheDocument();
    expect(getByText('Unit Price')).toBeInTheDocument();
    expect(getByText('Total')).toBeInTheDocument();

    expect(getByText('Mock Part')).toBeInTheDocument();
    expect(getByText('123456')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
    expect(getByText('$25.000')).toBeInTheDocument();
    expect(getByText('$75.000')).toBeInTheDocument();

    const imageElement = getByAltText('Product Image');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'mock_image_url');
    expect(getByText('XREF')).toBeInTheDocument();
  });

  it('renders order detail card without XREF chip when showXref is false', () => {
    const { queryByText } = renderOrderDetailCard({
      image: 'mock_image_url',
      part: 'Mock Part',
      partNumber: '123456',
      qty: 3,
      unitPrice: 25.0,
      total: 75.0,
      showXref: false,
      columns: mockColumns,
    });

    expect(queryByText('XREF')).toBeNull();
  });
  it('renders default image when image prop is not provided', () => {
    const propsWithoutImage = { ...testProps, image: undefined };
    const { getByAltText } = render(<OrderDetailCard {...propsWithoutImage} />);

    expect(getByAltText('Image')).toBeInTheDocument();
  });
});
