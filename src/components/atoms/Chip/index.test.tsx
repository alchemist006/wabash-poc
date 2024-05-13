import React from 'react';
import { render } from '@testing-library/react';
import CustomChip from '.';
import '@testing-library/jest-dom';

describe('CustomChip component', () => {
  test('renders with default label', () => {
    const { getByText } = render(<CustomChip label="Default Label" />);

    expect(getByText('Default Label')).toBeInTheDocument();
  });

  test('renders with React Node label', () => {
    const CustomLabel = () => <span>Custom Label</span>;
    const { getByText } = render(<CustomChip label={<CustomLabel />} />);
    expect(getByText('Custom Label')).toBeInTheDocument();
  });
});
