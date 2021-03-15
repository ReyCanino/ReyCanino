import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';

test('renders learn react link', () => {
  render(<NotFound />);
  const linkElement = screen.getByText(/Oops/i);
  expect(linkElement).toBeInTheDocument();
});
