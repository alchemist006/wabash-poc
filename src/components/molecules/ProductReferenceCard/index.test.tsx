import { render, screen } from '@testing-library/react';
import ProductReferencesCard from '.';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../theme';

describe('ProductReferencesCard', () => {
  const icon = <div data-testid="icon">Icon</div>;
  const heading = 'References';
  const data = [
    { id: 1, heading: 'Heading 1', description: 'Description 1' },
    { id: 2, heading: 'Heading 2', description: 'Description 2' },
  ];

  it('renders properly with icon and heading', () => {
    render(
      <ThemeProvider theme={theme}>
        <ProductReferencesCard icon={icon} heading={heading} data={[]} />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(screen.getByText('REFERENCES')).toBeInTheDocument();
  });

  it('renders data correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <ProductReferencesCard icon={icon} heading={heading} data={data} />
      </ThemeProvider>,
    );
    expect(screen.getByText('HEADING 1#')).toBeInTheDocument();
    expect(screen.getByText('DESCRIPTION 1')).toBeInTheDocument();
    expect(screen.getByText('HEADING 2#')).toBeInTheDocument();
    expect(screen.getByText('DESCRIPTION 2')).toBeInTheDocument();
  });

  it('renders nothing when data is empty', () => {
    render(
      <ThemeProvider theme={theme}>
        <ProductReferencesCard icon={icon} heading={heading} data={[]} />
      </ThemeProvider>,
    );
    expect(screen.queryByText('HEADING 1#')).toBeNull();
    expect(screen.queryByText('DESCRIPTION 1')).toBeNull();
    expect(screen.queryByText('HEADING 2#')).toBeNull();
    expect(screen.queryByText('DESCRIPTION 2')).toBeNull();
  });
});
