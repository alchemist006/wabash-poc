import type { Meta, StoryObj } from '@storybook/react';
import CheckboxLabelIcon from '.';
import { CATEGORIES } from '../../../utils/constants';

const meta: Meta<typeof CheckboxLabelIcon> = {
  title: 'Molecules/CheckboxLabelIcon',
  component: CheckboxLabelIcon,
};

export default meta;
type Story = StoryObj<typeof CheckboxLabelIcon>;

export const Default: Story = {
  args: { label: CATEGORIES, onClick: () => {}, checked: false },
};
