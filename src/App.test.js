import { render, screen } from '@testing-library/react';
import App from './App';

test('images and textures', () => {
  render(<App/>);
  const linkElement = screen.getByText(/new image/i);
  expect(linkElement).toBeInTheDocument();
});
