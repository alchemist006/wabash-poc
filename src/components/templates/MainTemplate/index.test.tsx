import React from 'react';
import { render } from '@testing-library/react';
import MainTemplate from './';

describe('MainTemplate', () => {
  test('renders header, content, and footer', () => {
    const header = <div>Header</div>;
    const content = <div>content</div>;
    const footer = <div>Footer</div>;
    const { getByText } = render(
      <MainTemplate header={header} content={content} footer={footer} />,
    );

    expect(getByText('Header')).toBeInTheDocument();
    expect(getByText('content')).toBeInTheDocument();
    expect(getByText('Footer')).toBeInTheDocument();
  });

  test('renders with correct styles', () => {
    const header = <div>Header</div>;
    const content = <div>content</div>;
    const footer = <div>Footer</div>;
    const { getByTestId } = render(
      <MainTemplate header={header} content={content} footer={footer} />,
    );

    const mainTemplate = getByTestId('main-template');
    expect(mainTemplate).toHaveStyle({
      display: 'flex',
      flexDirection: 'column',
    });
  });
});
