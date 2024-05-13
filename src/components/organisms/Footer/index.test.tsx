import { render } from '@testing-library/react';
import CustomFooter from '.';

describe('CustomFooter', () => {
  it('renders footer logo correctly', () => {
    const { getByAltText } = render(<CustomFooter />);
    const logo = getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders text elements correctly', () => {
    const { getByText } = render(<CustomFooter />);
    const privacyText = getByText('Privacy');
    const termsText = getByText('Terms');
    const californiaText = getByText(
      'California Transparency in Supply Chains Act of 2014',
    );
    expect(privacyText).toBeInTheDocument();
    expect(termsText).toBeInTheDocument();
    expect(californiaText).toBeInTheDocument();
  });

  it('renders footer copyright text correctly', () => {
    const { getByText } = render(<CustomFooter />);
    const copyrightText = getByText(
      '©2023 Wabash National Corporation. All rights reserved.',
    );
    expect(copyrightText).toBeInTheDocument();
  });
});
