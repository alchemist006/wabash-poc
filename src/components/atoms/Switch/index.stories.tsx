import { Meta, StoryObj } from '@storybook/react';
import Switch from '.';

const meta: Meta<typeof Switch> = {
  title: 'atoms/Switch',
  component: Switch,
};
export default meta;

type story = StoryObj<typeof Switch>;

export const Primary: story = {};
