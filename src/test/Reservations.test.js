import { render, screen } from '@testing-library/react';
import Reservations from '../pages/Reservations';

test('renders learn react link', () => {
  render(<Reservations />);
  const linkElement = screen.getByText(/rey canino/i);
  expect(linkElement).toBeInTheDocument();
});
