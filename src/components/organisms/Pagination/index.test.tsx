import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CustomPagination from '.';

import '@testing-library/jest-dom';
describe('CustomPagination', () => {
  const pageCount = 10;
  const items = [20, 40, 60];
  const pageSize = 20;
  const pageNumber = 1;
  const handlePageSizeChange = jest.fn();
  const handlePageNumberChange = jest.fn();

  it('renders with default props', () => {
    render(
      <CustomPagination
        pageCount={pageCount}
        items={items}
        pageSize={pageSize}
        pageNumber={pageNumber}
        handlePageSizeChange={handlePageSizeChange}
        handlePageNumberChange={handlePageNumberChange}
      />,
    );

    expect(screen.getByText('Items per Page:')).toBeInTheDocument();
  });

  it('calls the handlePageSizeChange when item is clicked', () => {
    const { queryAllByText } = render(
      <CustomPagination
        pageCount={pageCount}
        items={items}
        pageSize={pageSize}
        pageNumber={pageNumber}
        handlePageSizeChange={handlePageSizeChange}
        handlePageNumberChange={handlePageNumberChange}
      />,
    );

    const itemElements = queryAllByText('5');
    expect(itemElements.length).toBe(1);
  });
  it('calls handlePageSizeChange when item is clicked', () => {
    const { getByText } = render(
      <CustomPagination
        pageCount={pageCount}
        items={items}
        pageSize={pageSize}
        pageNumber={pageNumber}
        handlePageSizeChange={handlePageSizeChange}
        handlePageNumberChange={handlePageNumberChange}
      />,
    );

    // Click on the item with text "5"
    fireEvent.click(screen.getByText('20'));

    expect(handlePageSizeChange).toHaveBeenCalledWith(20);
  });
  it('calls handlePageNumberChange when page is changed', () => {
    const { getByText } = render(
      <CustomPagination
        pageCount={pageCount}
        items={items}
        pageSize={pageSize}
        pageNumber={pageNumber}
        handlePageSizeChange={handlePageSizeChange}
        handlePageNumberChange={handlePageNumberChange}
      />,
    );

    // Click on next page
    fireEvent.click(getByText('2'));

    // Assert that handlePageNumberChange is called with the correct page number
    expect(handlePageNumberChange).toHaveBeenCalledWith(2);
  });
});
