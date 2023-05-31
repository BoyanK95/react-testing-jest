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

test('initial conditions and functionality with checkbox', () => {
    render(<App />);

    const colorBtn = screen.getByRole('button', { name: 'Change to blue' });
    expect(colorBtn).toBeEnabled();

    const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(colorBtn).toBeDisabled();
});

test('disable should turn btn color from red to gray, reverts to red', () => {
    render(<App />);

    const colorBtn = screen.getByRole('button', { name: 'Change to blue' });
    const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

    fireEvent.click(checkbox);

    expect(colorBtn).toHaveStyle({ background: 'gray' });

    fireEvent.click(checkbox);

    expect(colorBtn).toHaveStyle({ background: 'red' });
});

test('should change btn color from red to blue on click and after checking checkbox to gray, revert to blue after unchecking', () => {
    render(<App />);

    const colorBtn = screen.getByRole('button', { name: 'Change to blue' });
    const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

    fireEvent.click(colorBtn);
    fireEvent.click(checkbox);

    expect(colorBtn).toHaveStyle({ background: 'gray' });

    fireEvent.click(checkbox);
    expect(colorBtn).toHaveStyle({ background: 'blue' });
});
