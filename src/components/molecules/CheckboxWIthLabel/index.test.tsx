import React from 'react';
import { render } from '@testing-library/react';
import CheckboxLabelIcon from './';

describe('CheckboxLabelIcon', () => {
  it('should render the label and checkbox', () => {
    const { getByText } = render(
      <CheckboxLabelIcon label="Test Label" onClick={() => {}} />,
    );
    expect(getByText('Test Label')).toBeInTheDocument();
  });
});
