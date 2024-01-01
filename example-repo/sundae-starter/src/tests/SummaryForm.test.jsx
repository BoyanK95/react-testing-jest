// eslint-disable-next-line no-unused-vars
import { fireEvent, render, screen } from '@testing-library/react';
import SummaryForm from '../pages/SummaryForm';
import userEvent from '@testing-library/user-event';

describe('initial state', () => {
    test('checkbox should be unchecked by default', () => {
        render(<SummaryForm />);

        const checkbox = screen.getByRole('checkbox');
        const confirmButton = screen.getByRole('button', { name: /confirm order/i });

        expect(checkbox).not.toBeChecked();
        expect(confirmButton).toBeDisabled();
    });

    test('Checkbox enables button on first click and disables on second click', async () => {
        render(<SummaryForm />);

        const checkbox = screen.getByRole('checkbox');
        const confirmButton = screen.getByRole('button', { name: /confirm order/i });

        // fireEvent.click(checkbox)
        await userEvent.click(checkbox);
        expect(confirmButton).toBeEnabled();

        // fireEvent.click(checkbox)
        await userEvent.click(checkbox);
        expect(confirmButton).toBeDisabled();
    });
});
