import { render } from '@testing-library/react';
import CircularProgressBar from './';

describe('CircularProgressBar', () => {
  it('renders without crashing', () => {
    render(<CircularProgressBar size={25} thickness={8} />);
  });
});
