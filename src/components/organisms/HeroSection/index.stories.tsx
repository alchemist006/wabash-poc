import type { Meta, StoryObj } from '@storybook/react';
import HeroSection from '.';

const meta: Meta<typeof HeroSection> = {
  title: 'Organisms/HeroSection',
  component: HeroSection,
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {
    caption: 'EXCEPTIONALLY ENGINEERED PARTS',
    heading: 'PERFOMACE AND DURABILITY',
    description:
      'Products that are engineered to deliver exceptional perfomance and durability,ensuring smooth and efficient transportation every time',
    showButton: true,
    defaultImage:
      'https://parts.onewabash.com/media/wysiwyg/wabash__birds-eye__static-double-heading-slide-main.png',
    fallBackImage:
      'https://parts.onewabash.com/assets/slide_mobile2-8553c4a2.png',
  },
};

export const Primary: Story = {
  args: {
    heading: 'HIGHER QUALITY GREATER SAVINGS',
    description:
      'Your ONE-Stop Destination for Reliable and High Quality Parts',
    showButton: false,
    defaultImage:
      'https://parts.onewabash.com/media/wysiwyg/wabash_static-double-heading-slide-main.png',
    fallBackImage:
      'https://parts.onewabash.com/assets/slide_mobile2-8553c4a2.png',
  },
};
