import { Meta, StoryObj } from '@storybook/react';
import Button from '.';
import theme from '../../../theme';

const meta: Meta<typeof Button> = {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'Button clicked' },
  },
};

export default meta;

type story = StoryObj<typeof Button>;

export const Contained: story = {
  args: {
    children: 'Submit',
    variant: 'contained',
    labelVariant: 'subtitle3',
    backgroundColor: theme.palette.primary.main,
    hoverbackgroundColor: theme.palette.accent.main,
    hoverColor: theme.palette.primary.main,
    sx: {
      padding: '12px 32px',
      width: '200px',
    },
  },
};

export const Outlined: story = {
  args: {
    children: 'Submit',
    variant: 'outlined',
    labelVariant: 'subtitle3',
    hoverbackgroundColor: theme.palette.primary.main,
    hoverColor: theme.palette.white.main,
    sx: {
      padding: '12px 32px',
      width: '200px',
    },
  },
};

export const Text: story = {
  args: {
    children: 'Sign In',
    variant: 'text',
    labelVariant: 'subtitle3',
  },
};
