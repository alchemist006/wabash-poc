import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import HomePage from './';
import { BrowserRouter } from 'react-router-dom';
import { FEATURED_PRODUCTS } from '../../utils/constants';

jest.mock('../../utils/api', () => ({
  get: jest.fn().mockImplementation((url) => {
    if (url.includes('/products')) {
      return Promise.resolve({
        data: [
          { id: 1, name: 'Product 1' },
          { id: 2, name: 'Product 2' },
        ],
        headers: { 'x-total-count': 2 },
      });
    } else {
      throw new Error('Invalid URL');
    }
  }),
}));

describe('HomePage component', () => {
  test('should render homepage with all elements', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
    );

    expect(screen.getByTestId('carousel')).toBeInTheDocument();
    expect(screen.getAllByTestId('core-value-card')).toHaveLength(3);
    expect(screen.getByText(FEATURED_PRODUCTS)).toBeInTheDocument();
  });
  // test('should move on arrow click', () => {
  //   render(
  //     <BrowserRouter>
  //       <HomePage />
  //     </BrowserRouter>,
  //   );

  //   fireEvent.click(screen.getByTestId('right-arrow'));
  //   fireEvent.click(screen.getByTestId('left-arrow'));
  //   expect(screen.getByTestId('left-arrow')).toBeInTheDocument();
  //   expect(screen.getByTestId('right-arrow')).toBeInTheDocument();
  // });
});
