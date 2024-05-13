import React from 'react';
import { render } from '@testing-library/react';
import PaymentCard from './';

describe('PaymentCard component', () => {
  it('renders without crashing', () => {
    render(
      <PaymentCard
        numberData={[
          { label: 'label1', value: 10 },
          { label: 'label2', value: 20 },
        ]}
        stringData={{ label: 'String Label', value: 'String Value' }}
      />,
    );
  });

  it('renders payment card correctly', () => {
    const { getByText } = render(
      <PaymentCard
        numberData={[
          { label: 'label1', value: 10 },
          { label: 'label2', value: 20 },
        ]}
        stringData={{ label: 'String Label', value: 'String Value' }}
      />,
    );

    expect(getByText('PAYMENT')).toBeInTheDocument();
    expect(getByText('String Label')).toBeInTheDocument();
    expect(getByText('$10.000')).toBeInTheDocument();
    expect(getByText('$20.000')).toBeInTheDocument();
    expect(getByText('Total:')).toBeInTheDocument();
    expect(getByText('$30.000')).toBeInTheDocument();
  });

  it('renders invoice card correctly', () => {
    const { getByText } = render(
      <PaymentCard
        numberData={[
          { label: 'label1', value: 10 },
          { label: 'label2', value: 20 },
        ]}
        stringData={{ label: 'String Label', value: 'String Value' }}
        invoice={true}
      />,
    );

    expect(getByText('Label1')).toBeInTheDocument();
    expect(getByText('$10.000')).toBeInTheDocument();
    expect(getByText('Label2')).toBeInTheDocument();
    expect(getByText('$20.000')).toBeInTheDocument();
    expect(getByText('Total:')).toBeInTheDocument();
    expect(getByText('$30.000')).toBeInTheDocument();
  });

  it('calculates total correctly', () => {
    const { getByText } = render(
      <PaymentCard
        numberData={[
          { label: 'label1', value: 10 },
          { label: 'label2', value: 20 },
        ]}
        stringData={{ label: 'String Label', value: 'String Value' }}
        invoice={true}
      />,
    );

    expect(getByText('$30.000')).toBeInTheDocument();
  });
});
