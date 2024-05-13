import type { Meta, StoryObj } from '@storybook/react';
import CustomPagination from '.';
import { action } from '@storybook/addon-actions';
const meta: Meta<typeof CustomPagination> = {
  title: 'Organisms/CustomPagination',
  component: CustomPagination,
};

export default meta;
type Story = StoryObj<typeof CustomPagination>;

export const Default: Story = {
  args: {
    pageCount: 10,
    items: [5, 10, 20, 50],
    pageSize: 10,
    handlePageSizeChange: action('handlePageSizeChange'),
    handlePageNumberChange: action('handlePageNumberChange'),
  },
};
