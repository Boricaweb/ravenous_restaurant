import { render, screen } from '@testing-library/react';
import BusinessList from './BusinessList';

test('renders learn react link', () => {
  render(<BusinessList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
