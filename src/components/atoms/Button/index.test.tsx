import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '.';
import theme from '../../../theme';

describe('Button Component', () => {
  it('renders button text correctly', () => {
    const buttonText = 'Click Me';
    const { getByText } = render(
      <Button labelColor={theme.palette.primary.main}>{buttonText}</Button>,
    );
    expect(getByText(buttonText)).toBeInTheDocument();
  });

  it('calls onClick handler when button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <Button
        onClick={onClickMock}
        data-testid="button"
        labelColor={theme.palette.primary.main}
      >
        Click Me
      </Button>,
    );
    fireEvent.click(getByTestId('button'));

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('changes color on hover when hoverColor is specified', () => {
    const hoverColor = theme.palette.primary.main;
    const { getByTestId } = render(
      <Button
        hoverColor={hoverColor}
        data-testid="button"
        labelColor={theme.palette.primary.main}
      >
        Click Me
      </Button>,
    );
    fireEvent.mouseEnter(getByTestId('button'));
    expect(getByTestId('button')).toHaveStyle(`color: ${hoverColor}`);
  });
});
