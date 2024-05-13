import { fireEvent, render, screen } from '@testing-library/react';
import UptoDateSection from '.';
import React from 'react';
import '@testing-library/jest-dom';

describe('UptoDateSection', () => {
  const mockOnClick = jest.fn();
  it('Should render the component', () => {
    render(<UptoDateSection handleClick={mockOnClick} />);
    const component = screen.getByTestId('uptodate-section');
    expect(component).toBeInTheDocument();
  });

  it('Should perform onClick', () => {
    render(<UptoDateSection handleClick={mockOnClick} />);
    const component = screen.getByTestId('uptodate-section');
    expect(component).toBeInTheDocument();
    fireEvent.click(screen.getByText('SUBMIT'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
