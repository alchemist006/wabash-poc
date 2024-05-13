import { render, screen } from '@testing-library/react';
import SearchResultCard from '.';

describe('SearchResultCard', () => {
  const mockProps = {
    part_number: 'WHT7142',
    manfacturer: 'WHITE ROLLING-UP DOOR',
    description: 'BOTTOM PANEL COMPLETE',
    handleClick: jest.fn(),
  };

  it('renders card with correct data', () => {
    render(<SearchResultCard {...mockProps} />);
    expect(screen.getByText(mockProps.part_number)).toBeInTheDocument();
    expect(screen.getByText(mockProps.manfacturer)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });
});
