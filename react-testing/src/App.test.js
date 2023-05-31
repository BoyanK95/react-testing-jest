import { render, screen } from '@testing-library/react';
import App from './App';

test('button has correct intiial color', () => {
  render(<App />)
  const colorBtn = screen.getByRole('button', {name: 'Change to blue'})

  expect(colorBtn).toHaveStyle({background: 'red'})
});

test('button turns blue when clicked', () => {

})