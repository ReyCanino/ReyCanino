import { render, screen } from '@testing-library/react';
import LoginForm from '../components/LoginForm';

test('renders learn react link', () => {
  render(<LoginForm />);
  const linkElement = screen.getByText(/rey canino/i);
  expect(linkElement).toBeInTheDocument();
});
