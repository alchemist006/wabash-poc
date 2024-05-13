import { act, fireEvent, render, screen } from '@testing-library/react';
import GlobalSearch from '.';
import React from 'react';
import * as Service from '../../../services';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

describe('Global Search', () => {
  beforeEach(() => {
    jest.spyOn(Service, 'getProductData').mockResolvedValue({
      count: 0,
      data: [],
    });
  });

  it('should render the component', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <GlobalSearch />
        </BrowserRouter>,
      );
    });

    const placeholder = screen.getByPlaceholderText(
      'Search parts name or keywords',
    );
    fireEvent.focus(placeholder);
    const text = screen.getByText('We could not find a match for your search');
    expect(text).toBeInTheDocument();
  });

  it('should fetch the data', async () => {
    jest.spyOn(Service, 'getProductData').mockResolvedValue({
      data: [
        {
          id: 1,
          manufacturer: 'WHITE ROLLING-UP DOOR',
          description: 'BOTTOM PANEL COMPLETE',
          part_number: 'WHT7142',
          list: 932.503,
          price: 373.2,
          stocked: 'yes',
          qty_available: 2,
          uom: 'Each',
          self_pack: 1,
          wgt: 178,
          shipping: 'Non UPS',
          category: 'Drums',
        },
        {
          id: 2,
          manufacturer: 'WHITE ROLLING-DOWN DOOR',
          description: 'TOP PANEL COMPLETE',
          part_number: 'WHT7143',
          list: 932.503,
          price: 373.2,
          stocked: 'yes',
          qty_available: 2,
          uom: 'Each',
          self_pack: 1,
          wgt: 178,
          shipping: 'Non UPS',
          category: 'Drums',
        },
      ],
      count: 3,
    });
    await act(async () => {
      render(
        <BrowserRouter>
          <GlobalSearch />
        </BrowserRouter>,
      );
    });

    const placeholder = screen.getByPlaceholderText(
      'Search parts name or keywords',
    );
    fireEvent.focus(placeholder);
    const text = screen.getByText('BOTTOM PANEL COMPLETE');
    expect(text).toBeInTheDocument();
    fireEvent.change(placeholder, {
      target: { value: 'BOTTOM PANEL COMPLETE' },
    });

    fireEvent.blur(placeholder);
  });
});
