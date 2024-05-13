import { render, screen } from '@testing-library/react';
import Switch from '.';
import React from 'react';
import '@testing-library/jest-dom';

describe('Switch', () => {
  it('should render the component', () => {
    render(<Switch />);
    const component = screen.getByTestId('switch');
    expect(component).toBeInTheDocument();
  });
  it('should show active style when checked', () => {
    render(<Switch checked />);
    const component = screen.getByTestId('switch');
    expect(component).toHaveClass('Mui-checked');
  });
  it('should show inactive style when unchecked', () => {
    render(<Switch />);
    const component = screen.getByTestId('switch');
    expect(component).toBeInTheDocument();
    expect(component).not.toHaveClass('Mui-checked');
  });
});
