import React from 'react';
import { render } from '@testing-library/react';
import AccentIconWrapper from './';

describe('AccentIconWrapper', () => {
  it('renders the component with the correct icon source and alt text', () => {
    const iconSrc = 'path/to/icon.svg';
    const iconAlt = 'Icon Alt Text';

    const { getByAltText } = render(
      <AccentIconWrapper iconSrc={iconSrc} iconAlt={iconAlt} />,
    );

    const icon = getByAltText(iconAlt);
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('src', iconSrc);
  });
});
