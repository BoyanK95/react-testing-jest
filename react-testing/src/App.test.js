import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct intiial color', () => {
    render(<App />);
    const colorBtn = screen.getByRole('button', { name: 'Change to blue' });

    expect(colorBtn).toHaveStyle({ background: 'red' });
});

test('button turns blue when clicked', () => {
    render(<App />);
    //expect the  background of the btn to be red
    const colorBtn = screen.getByRole('button', { name: 'Change to blue' });

    //click btn
    fireEvent.click(colorBtn);

    //expect the background color to be blue and text to change
    expect(colorBtn).toHaveStyle({ background: 'blue' });
    expect(colorBtn).toHaveTextContent('Change to red');
});

test('initial conditions', () => {
    render(<App />);

    const colorBtn = screen.getByRole('button', { name: 'Change to blue' });
    expect(colorBtn).toBeEnabled();

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked()
    expect(colorBtn).toBeDisabled()
});
