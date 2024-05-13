import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from '.';
import { SIGN_IN } from '../../../utils/constants';
import { BrowserRouter } from 'react-router-dom';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

test('renders logo, search input, and sign-in button', () => {
  const { getByAltText, getByText } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );

  const logo = getByAltText('wabash-logo');
  fireEvent.click(logo);
  expect(mockNavigate).toHaveBeenCalledWith('/');

  const signInButton = getByText(SIGN_IN);
  fireEvent.click(signInButton);
  expect(mockNavigate).toHaveBeenCalledWith('/');
});
