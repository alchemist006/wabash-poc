import React from 'react';
import { render } from '@testing-library/react';
import HeaderContactSection from './';
import { HEADER_CONTACT_SECTION_TEXT } from '../../../utils/constants';

describe('HeaderContactSection', () => {
  it('renders the component with the correct text', () => {
    const { getByText } = render(<HeaderContactSection />);
    const textElement = getByText(HEADER_CONTACT_SECTION_TEXT);
    expect(textElement).toBeInTheDocument();
  });
});
