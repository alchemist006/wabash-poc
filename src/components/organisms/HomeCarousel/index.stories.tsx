import type { Meta, StoryObj } from '@storybook/react';
import HomeCarousel from '.';
import { SLIDER_DATA } from '../../../utils/constants';

const meta: Meta<typeof HomeCarousel> = {
  title: 'Organisms/HomeCarousel',
  component: HomeCarousel,
};

export default meta;
type Story = StoryObj<typeof HomeCarousel>;

export const Default: Story = {
  args: {
    items: SLIDER_DATA,
  },
};
