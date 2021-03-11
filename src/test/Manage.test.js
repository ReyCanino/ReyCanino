import { render, screen } from '@testing-library/react';
import Manage from '../pages/Manage';

test('renders learn react link', () => {
  render(<Manage />);
  const linkElement = screen.getByText(/rey canino/i);
  expect(linkElement).toBeInTheDocument();
});
