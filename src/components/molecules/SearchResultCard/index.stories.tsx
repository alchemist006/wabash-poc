import type { Meta, StoryObj } from '@storybook/react';
import SearchResultCard from '.';

const meta: Meta<typeof SearchResultCard> = {
  title: 'Molecules/SearchResultCard',
  component: SearchResultCard,
};

export default meta;
type Story = StoryObj<typeof SearchResultCard>;

export const Default: Story = {
  args: {
    part_number: 'WHTI5707-VO7',
    manfacturer: 'WHITING ROLL-UP DOOR',
    description: 'BOTTOM PANAL COMPLETE',
  },
};
