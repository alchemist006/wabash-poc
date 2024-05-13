import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextualSwitch, { SwitchLabelProps } from '.';

describe('TextualSwitch component', () => {
  const handleChangeMock = jest.fn();
  const defaultProps: SwitchLabelProps = {
    checked: false,
    handleChange: handleChangeMock,
    label: 'Test Label',
  };

  test('Should render correctly with default props', () => {
    const { getByText, getByLabelText } = render(
      <TextualSwitch {...defaultProps} />,
    );
    expect(getByText('Test Label')).toBeInTheDocument();
    expect(getByLabelText('Test Label')).toBeInTheDocument();
  });

  test('Should trigger handleChange function on toggle', () => {
    const { getByLabelText } = render(<TextualSwitch {...defaultProps} />);
    const switchInput = getByLabelText('Test Label');
    fireEvent.click(switchInput);
    expect(handleChangeMock).toHaveBeenCalledTimes(1);
  });
});
