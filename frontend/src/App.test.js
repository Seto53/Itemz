import { render, screen } from '@testing-library/react';
import App from './App';


//Dummy first test
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Discover, collect, and share your digital collectibles/i);
  expect(linkElement).toBeInTheDocument();
});
