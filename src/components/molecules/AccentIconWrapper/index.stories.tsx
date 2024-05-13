import type { Meta, StoryObj } from '@storybook/react';
import AccentIconWrapper from '.';
import MindIcon from '../../../../public/assets/icons/mind.svg';

const meta: Meta<typeof AccentIconWrapper> = {
  title: 'Molecules/AccentIconWrapper',
  component: AccentIconWrapper,
};

export default meta;
type Story = StoryObj<typeof AccentIconWrapper>;

export const Default: Story = {
  args: { iconSrc: MindIcon, iconAlt: 'mind-icon' },
};
