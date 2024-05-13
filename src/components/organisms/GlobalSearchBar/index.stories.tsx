import type { Meta, StoryObj } from '@storybook/react';
import GlobalSearch from '.';

const meta: Meta<typeof GlobalSearch> = {
  title: 'Organisms/GlobalSearch',
  component: GlobalSearch,
};

export default meta;
type Story = StoryObj<typeof GlobalSearch>;

export const Default: Story = {
  args: {},
};
