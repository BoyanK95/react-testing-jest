import { fireEvent, render, screen } from '@testing-library/react';
import SummaryForm from '../pages/SummaryForm';
// import SummaryForm from '../../../../sundaes-on-demand/src/pages/summary/SummaryForm';

describe('initial state', () => {
    test('checkbox should be unchecked by default', () => {
        render(<SummaryForm />);

        const checkbox = screen.getByRole('checkbox');
        const confirmButton = screen.getAllByRole('button', { name: /confirm order/i });

        expect(checkbox).not.toBeChecked();
        expect(confirmButton).toBeDisabled();
    });

    test('Checkbox enables button on first click and disables on second click', () => {
        render(<SummaryForm />);

        const checkbox = screen.getByRole('checkbox');
        const confirmButton = screen.getAllByRole('button', { name: /confirm order/i });

        fireEvent.click(checkbox);
        expect(confirmButton).toBeEnabled();

        fireEvent.click(checkbox)
        expect(confirmButton).toBeDisabled()
    });
});
