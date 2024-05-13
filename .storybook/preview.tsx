import type { Preview } from '@storybook/react';
import '../src/App.css';
import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from '../src/theme';
import { BrowserRouter } from 'react-router-dom';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </BrowserRouter>
  ),
];

export default preview;
