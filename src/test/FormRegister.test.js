import { render, screen } from '@testing-library/react';
import FormRegister from '../components/FormRegister';

test('renders learn react link', () => {
  render(<FormRegister />);
  const linkElement = screen.getByText(/rey canino/i);
  expect(linkElement).toBeInTheDocument();
});
