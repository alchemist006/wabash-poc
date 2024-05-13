import { renderHook, act } from '@testing-library/react';

import { usePagination } from './hook';

describe('usePagination hook', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => usePagination(20, 1));

    expect(result.current.pageSize).toBe(20);
    expect(result.current.pageNumber).toBe(1);
  });

  it('should change pageSize and reset pageNumber', () => {
    const { result } = renderHook(() => usePagination(10, 1));

    act(() => {
      result.current.handlePageSizeChange(10);
    });

    expect(result.current.pageSize).toBe(10);
    expect(result.current.pageNumber).toBe(1);
  });

  it('should change pageNumber', () => {
    const { result } = renderHook(() => usePagination(20, 1));

    act(() => {
      result.current.handlePageNumberChange(2);
    });

    expect(result.current.pageNumber).toBe(2);
  });

  it('should not change pageSize if new pageSize is the same', () => {
    const { result } = renderHook(() => usePagination(20, 1));

    act(() => {
      result.current.handlePageSizeChange(20);
    });

    expect(result.current.pageSize).toBe(20);
    expect(result.current.pageNumber).toBe(1);
  });

  it('should not change pageNumber if new pageNumber is the same', () => {
    const { result } = renderHook(() => usePagination(20, 1));

    act(() => {
      result.current.handlePageNumberChange(1);
    });

    expect(result.current.pageNumber).toBe(1);
  });
});
