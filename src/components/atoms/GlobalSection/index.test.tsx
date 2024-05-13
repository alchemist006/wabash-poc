import React from 'react';
import { render } from '@testing-library/react';
import GlobalSection from './';

describe('GlobalSection component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <GlobalSection>
        <div>Hello, world!</div>
      </GlobalSection>,
    );

    expect(getByText('Hello, world!')).toBeInTheDocument();
  });
});
