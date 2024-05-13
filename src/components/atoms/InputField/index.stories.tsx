import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import InputField, { TextFieldProps } from '.';

const meta: Meta = {
  title: 'atoms/TextBox',
  component: InputField,
};
export default meta;

const Template: StoryFn<TextFieldProps> = (args) => <InputField {...args} />;

export const PrimaryInput = Template.bind({});
PrimaryInput.args = {
  placeholder: 'Search part name or keywords',
  showLoader: true,
  primary: true,
  sx: {
    width: '50%',
  },
};

export const SecondaryInput = Template.bind({});
SecondaryInput.args = {
  placeholder: 'Enter the name',
};
