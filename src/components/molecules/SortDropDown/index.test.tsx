import { fireEvent, render, screen } from '@testing-library/react';
import DropDown from '.';
import React from 'react';
import '@testing-library/jest-dom';
import { SORT_OPTIONS } from '../../../utils/constants';

describe('Dropdown', () => {
  const mockOnChange = jest.fn();
  const mockOnClick = jest.fn();
  it('should render the component', () => {
    render(
      <DropDown
        handleChange={mockOnChange}
        options={SORT_OPTIONS}
        value={SORT_OPTIONS[0]}
      />,
    );
    const component = screen.getByTestId('dropdown');
    expect(component).toBeInTheDocument();
  });
  it('should perform handleChange', () => {
    render(
      <DropDown
        handleChange={mockOnChange}
        options={SORT_OPTIONS}
        value={SORT_OPTIONS[0]}
      />,
    );
    const component = screen.getByTestId('dropdown');
    expect(component).toBeInTheDocument();
    const optionSelect = screen.getByRole('combobox');
    expect(optionSelect).toBeInTheDocument();
    fireEvent.mouseDown(optionSelect);
    fireEvent.click(screen.getByTestId('item-0'));
    expect(mockOnChange).toHaveBeenCalledTimes(0);
  });

  it('should show the filter when prop is provided', async () => {
    const mockOnChange = jest.fn();
    render(
      <DropDown
        handleChange={mockOnChange}
        options={SORT_OPTIONS}
        showFilter
        value=""
        handleClick={mockOnClick}
      />,
    );
    expect(screen.getByTestId('filter')).toBeInTheDocument();
    expect(screen.getByText(SORT_OPTIONS[0])).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('filter'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
