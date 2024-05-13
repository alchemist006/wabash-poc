import { Meta, StoryFn } from '@storybook/react';
import TextualSwitch, { SwitchLabelProps } from '.';
import React from 'react';

const meta: Meta<typeof TextualSwitch> = {
  title: 'Molecules/TextualSwitch',
  component: TextualSwitch,
};
export default meta;

const Template: StoryFn<SwitchLabelProps> = (args) => (
  <TextualSwitch {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Stocked',
};
