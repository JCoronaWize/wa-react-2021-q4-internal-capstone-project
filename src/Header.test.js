import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders logo correctly in Header', () => {
  render(<Header />);
  const theLogo = screen.getByAltText('logo');
  expect(theLogo.src).toContain('the-logo.png');
});
