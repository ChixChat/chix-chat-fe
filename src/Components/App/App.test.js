import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello Chix header', () => {
  render(<App />);
  const helloChix = screen.getByText(/Hello Chix/i);
  expect(helloChix).toBeInTheDocument();
});
