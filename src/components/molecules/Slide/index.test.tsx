import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Slide from './';

describe('Slide component', () => {
  it('renders correctly with all props', () => {
    const slideBgImage = 'image.jpg';
    const headText = 'Headline';
    const subtitle = 'Subtitle';
    const onClick = jest.fn();
    const buttonLabel = 'Button';

    render(
      <Slide
        slideBgImage={slideBgImage}
        headText={headText}
        subtitle={subtitle}
        onClick={onClick}
        buttonLabel={buttonLabel}
      />,
    );

    expect(screen.getByText(headText)).toBeInTheDocument();
    expect(screen.getByText(subtitle)).toBeInTheDocument();
    expect(screen.getByText(buttonLabel)).toBeInTheDocument();
  });

  it('renders correctly without optional props', () => {
    const slideBgImage = 'image.jpg';

    render(<Slide slideBgImage={slideBgImage} />);

    expect(screen.queryByText('Headline')).toBeNull();
    expect(screen.queryByText('Subtitle')).toBeNull();
    expect(screen.queryByText('Button')).toBeNull();
  });
  it('calls onClick handler when button is clicked', () => {
    const slideBgImage = 'image.jpg';
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <Slide slideBgImage={slideBgImage} onClick={onClickMock} />,
    );
    fireEvent.click(getByTestId('button'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
