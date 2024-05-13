import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ListItemButtonComponent from './';

describe('ListItemButtonComponent', () => {
  it('renders with initial state', () => {
    const onClickMock = jest.fn();
    const { getByText, getByTestId } = render(
      <ListItemButtonComponent label="Test Label" onClick={onClickMock} />,
    );

    const labelElement = getByText('Test Label');
    expect(labelElement).toBeInTheDocument();

    const arrowIconElement = getByTestId('down-arrow');
    expect(arrowIconElement).toBeInTheDocument();
    expect(arrowIconElement).toHaveClass('MuiSvgIcon-root');
    expect(arrowIconElement).toHaveClass('MuiSvgIcon-colorPrimary');
  });

  it('toggles state and calls onClick when clicked', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <ListItemButtonComponent label="Test Label" onClick={onClickMock} />,
    );

    const arrowIconElement = getByTestId('down-arrow');
    fireEvent.click(arrowIconElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
