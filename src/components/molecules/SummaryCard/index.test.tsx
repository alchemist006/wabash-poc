import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SummaryCard from '.';

const mockProps = {
  subtotal: 100,
  savings: 20,
};

describe('SummaryCard component', () => {
  test('renders with correct content', () => {
    render(<SummaryCard {...mockProps} />);

    expect(screen.getByText('ORDER SUMMARY')).toBeInTheDocument();

    expect(screen.getByText('Subtotal')).toBeInTheDocument();
    expect(screen.getByText('Savings')).toBeInTheDocument();

    expect(screen.getByText('$100.000')).toBeInTheDocument();
    expect(screen.getByText('$20.000')).toBeInTheDocument();

    expect(screen.getByText('CONTINUE')).toBeInTheDocument();
    expect(screen.getByText('REQUEST A QUOTE')).toBeInTheDocument();
  });
});
