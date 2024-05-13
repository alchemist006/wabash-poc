import type { Meta, StoryObj } from '@storybook/react';
import Slide from '.';
import SlideBgImage from '../../../../public/assets/images/home-section-slider-slide1-bg.png';

const meta: Meta<typeof Slide> = {
  title: 'Molecules/Slide',
  component: Slide,
};

export default meta;
type Story = StoryObj<typeof Slide>;

export const Default: Story = {
  args: {
    slideBgImage: SlideBgImage,
    headText: 'WABASH GENUINE PARTS',
    subtitle: 'The only place to get real.',
    buttonLabel: 'FIND PARTS',
  },
};
