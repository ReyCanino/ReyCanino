import { render, screen } from '@testing-library/react';
import ManageReservation from '../components/ManageReservations';

test('renders learn react link', () => {
  localStorage.setItem("userID", "f27d9717-9f4c-4ad2-ae36-8e9117b3848e")
  render(<ManageReservation />);
});
