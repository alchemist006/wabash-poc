import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignedHeader from '.';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

test('renders logo, search input, and sign-in button', () => {
  const { getByAltText } = render(
    <BrowserRouter>
      <SignedHeader productLength={0} />
    </BrowserRouter>,
  );

  const logo = getByAltText('wabash-logo');
  fireEvent.click(logo);

  expect(mockNavigate).toHaveBeenCalledWith('/');
});
