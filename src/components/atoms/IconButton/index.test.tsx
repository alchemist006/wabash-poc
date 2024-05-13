import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import IconButton from './';
import { ThemeProvider } from '@mui/material';
import theme from '../../../theme';

describe('IconButton', () => {
  it('should render the icon button', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <IconButton icon={<div data-testid="icon" />} />
      </ThemeProvider>,
    );
    expect(getByTestId('button')).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <IconButton icon={<div data-testid="icon" />} onClick={onClickMock} />
      </ThemeProvider>,
    );
    fireEvent.click(getByTestId('button'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should apply custom className', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <IconButton
          icon={<div data-testid="icon" />}
          className="custom-class"
        />
      </ThemeProvider>,
    );
    expect(getByTestId('button')).toHaveClass('custom-class');
  });

  it('should render the correct icon', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <IconButton icon={<div data-testid="icon" />} />
      </ThemeProvider>,
    );
    expect(getByTestId('icon')).toBeInTheDocument();
  });
});
