import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CustomizedAccordions, { TreeviewProps } from '.';
import { ThemeProvider } from '@mui/material';
import theme from '../../../theme';

describe('CustomizedAccordions', () => {
  const mockProps: TreeviewProps = {
    selectedView: 'list',
    expanded: [],
    categories: [],
    manufacturers: [],
    stockSelected: false,
    promotionSelected: false,
    handleCategoryChange: jest.fn(),
    handleSubCategoryChange: jest.fn(),
    handleChange: jest.fn(),
    handleManufacturerChange: jest.fn(),
    handleClearAll: jest.fn(),
    handlePromotionSwitchChange: jest.fn(),
    handleStockSwitchChange: jest.fn(),
    handleListViewChange: jest.fn(),
    handleBoxViewChange: jest.fn(),
  };

  it('renders without crashing', () => {
    render(
      <ThemeProvider theme={theme}>
        <CustomizedAccordions {...mockProps} />
      </ThemeProvider>,
    );
  });
});
