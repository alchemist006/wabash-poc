import { fireEvent, render, screen } from '@testing-library/react';
import InputField from '.';
import React from 'react';
import '@testing-library/jest-dom';

describe('TextField', () => {
  it('Should render the component', () => {
    render(<InputField />);
    const component = screen.getByTestId('text-field');
    expect(component).toBeInTheDocument();
  });

  it('Should perform handleChange', () => {
    render(<InputField placeholder="enter name" />);
    const component: HTMLInputElement =
      screen.getByPlaceholderText('enter name');
    fireEvent.change(component, { target: { value: 'john' } });
    expect(component.value).toBe('john');
  });

  it('Should perform handleChange', () => {
    render(<InputField placeholder="enter name" showLoader primary />);
    const component = screen.getByTestId('progress');
    expect(component).toBeInTheDocument();
  });
});
