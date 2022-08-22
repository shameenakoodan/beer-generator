import { render, screen } from '@testing-library/react';
import App from './App';
import MainContainer from './container/MainContainer/MainContainer';

it('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Beer Generator/i);
  expect(linkElement).toBeInTheDocument();
});
