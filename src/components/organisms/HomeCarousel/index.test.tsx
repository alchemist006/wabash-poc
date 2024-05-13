import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Carousel from './';

const items = [
  {
    bgImage: 'url1',
    headText: 'Header 1',
    subText: 'Subtext 1',
    buttonLabel: 'Button 1',
    onClick: jest.fn(),
  },
  {
    bgImage: 'url2',
    headText: 'Header 2',
    subText: 'Subtext 2',
    buttonLabel: 'Button 2',
    onClick: jest.fn(),
  },
  {
    bgImage: 'url3',
    headText: 'Header 3',
    subText: 'Subtext 3',
    buttonLabel: 'Button 3',
    onClick: jest.fn(),
  },
];

test('renders carousel with slides and navigation dots', () => {
  const { getByText } = render(<Carousel items={items} />);

  items.forEach((item) => {
    expect(getByText(item.headText)).toBeInTheDocument();
    expect(getByText(item.subText)).toBeInTheDocument();
    expect(getByText(item.buttonLabel)).toBeInTheDocument();
  });
});

test('clicking next button transitions to next slide', () => {
  const { getByLabelText, getByText } = render(<Carousel items={items} />);
  const nextButton = getByLabelText('Next');

  fireEvent.click(nextButton);
  expect(getByText('Header 2')).toBeInTheDocument();
});

test('clicking previous button transitions to previous slide', () => {
  const { getByLabelText, getByText } = render(<Carousel items={items} />);
  const prevButton = getByLabelText('Previous');

  fireEvent.click(prevButton);
  expect(getByText('Header 3')).toBeInTheDocument();
});

test('when last slide, clicking next transitions to first slide', () => {
  const { getByLabelText, getByText } = render(<Carousel items={items} />);
  const nextButton = getByLabelText('Next');

  fireEvent.click(nextButton);
  fireEvent.click(nextButton);
  fireEvent.click(nextButton);

  expect(getByText('Header 1')).toBeInTheDocument();
});
