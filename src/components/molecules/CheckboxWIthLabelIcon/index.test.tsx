import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CheckboxLabelIcon from './';

describe('CheckboxLabelIcon', () => {
  it('should render the label and checkbox', () => {
    const { getByText } = render(
      <CheckboxLabelIcon label="Test Label" onClick={() => {}} />,
    );
    expect(getByText('Test Label')).toBeInTheDocument();
  });

  it('should toggle expansion when clicked', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <CheckboxLabelIcon label="Test Label" onClick={onClickMock} />,
    );

    expect(getByTestId('down-arrow')).toBeInTheDocument();
    fireEvent.click(getByTestId('down-arrow'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
    expect(getByTestId('up-arrow')).toBeInTheDocument();
  });

  it('should have collapsed icon when isExpanded is false', () => {
    const { getByTestId } = render(
      <CheckboxLabelIcon label="Test Label" onClick={() => {}} checked />,
    );

    expect(getByTestId('down-arrow')).toBeInTheDocument();
  });
});
