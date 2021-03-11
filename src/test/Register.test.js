import { render, screen } from '@testing-library/react';
import Register from '../pages/Register';

test('renders learn react link', () => {
  render(<Register />);
  const linkElement = screen.getByText(/rey canino/i);
  expect(linkElement).toBeInTheDocument();
});
