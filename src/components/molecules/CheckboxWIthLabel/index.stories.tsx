import type { Meta, StoryObj } from '@storybook/react';
import CheckboxLabel from '.';
import { CATEGORIES } from '../../../utils/constants';

const meta: Meta<typeof CheckboxLabel> = {
  title: 'Molecules/CheckboxLabel',
  component: CheckboxLabel,
};

export default meta;
type Story = StoryObj<typeof CheckboxLabel>;

export const Default: Story = {
  args: { label: CATEGORIES, onClick: () => {}, checked: false },
};
