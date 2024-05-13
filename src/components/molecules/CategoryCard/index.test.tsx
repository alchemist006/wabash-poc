import { fireEvent, render, screen } from '@testing-library/react';
import CategoryCard from '.';
import React from 'react';
import '@testing-library/jest-dom';

describe('CategoryCard', () => {
  const mockOnClick = jest.fn();
  it('should render the component', () => {
    render(<CategoryCard handleClick={mockOnClick} content={'Battery'} />);
    const component = screen.getByTestId('category-card');
    expect(component).toBeInTheDocument();
  });
  it('should perform onClick', () => {
    render(<CategoryCard handleClick={mockOnClick} content={'Battery'} />);
    const component = screen.getByTestId('category-card');
    expect(component).toBeInTheDocument();
    fireEvent.click(component);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(mockOnClick).toHaveBeenCalledWith('Battery');
  });
});
