import { render, screen } from '@testing-library/react';
import CardMolecule from '.';
import React from 'react';
import '@testing-library/jest-dom';
import thumbs from '../../../../public/assets/icons/thumbsup.svg';
describe('Card', () => {
  it('should render the component', () => {
    render(
      <CardMolecule
        src={thumbs}
        heading={'BEST RESULTS'}
        title={'Wabash or Wabash-certified parts that optimize performance.'}
      />,
    );
    const component = screen.getByTestId('card');
    expect(component).toBeInTheDocument();
  });

  it('should render the heading and title correctly', () => {
    render(
      <CardMolecule
        src={thumbs}
        heading={'BEST RESULTS'}
        title={'Wabash or Wabash-certified parts that optimize performance.'}
      />,
    );
    const component = screen.getByTestId('card');
    expect(component).toBeInTheDocument();
    expect(screen.getByText('BEST RESULTS')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Wabash or Wabash-certified parts that optimize performance.',
      ),
    ).toBeInTheDocument();
  });
});
