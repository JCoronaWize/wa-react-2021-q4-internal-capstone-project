import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Academy React Bootcamp Footer', () => {
  render(<App />);
  const linkElement = screen.getByText(/Academy React Bootcamp/i);
  expect(linkElement).toBeInTheDocument();
});
