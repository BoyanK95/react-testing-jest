import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../summary/SummaryForm';

describe('initial state', () => {
    test('checkbox should be unchecked by default', () => {
        render(<SummaryForm />);

        const checkbox = screen.getByRole('checkbox');
        const confirmButton = screen.getByRole('button', { name: /confirm order/i });

        expect(checkbox).not.toBeChecked();
        expect(confirmButton).toBeDisabled();
    });

    test('checkbox should disable button, and anables button on second click', () => {
        render(<SummaryForm />);

        const checkbox = screen.getByRole('checkbox');
        const confirmButton = screen.getByRole('button', { name: /confirm order/i });

        fireEvent.click(checkbox);
        expect(confirmButton).toBeEnabled();

        fireEvent.click(checkbox);
        expect(confirmButton).toBeDisabled();
    });
});
