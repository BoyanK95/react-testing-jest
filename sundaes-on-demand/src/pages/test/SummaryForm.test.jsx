import { render, screen } from '@testing-library/react';
import SummaryForm from '../summary/SummaryForm';
import userEvent from '@testing-library/user-event';

describe('initial state', () => {
    test('checkbox should be unchecked by default', () => {
        render(<SummaryForm />);

        const checkbox = screen.getByRole('checkbox');
        const confirmButton = screen.getByRole('button', { name: /confirm order/i });

        expect(checkbox).not.toBeChecked();
        expect(confirmButton).toBeDisabled();
    });

    test('checkbox should disable button, and anables button on second click', async () => {
        const user = userEvent.setup();

        render(<SummaryForm />);

        const checkbox = screen.getByRole('checkbox');
        const confirmButton = screen.getByRole('button', { name: /confirm order/i });

        await user.click(checkbox);
        expect(confirmButton).toBeEnabled();

        await user.click(checkbox);
        expect(confirmButton).toBeDisabled();
    });
});

describe('popover functionality', () => {
    test('popover responds to hover', async () => {
        const user = userEvent.setup();

        render(<SummaryForm />);

        // popover starts out hidden
        const nullPopover = screen.queryByText(/no ice cream will actually be ddelivered/i);
        expect(nullPopover).not.toBeInTheDocument();

        // popover appears on hover
        const termsAndConditions = screen.getByText(/terms and conditions/i);
        await user.hover(termsAndConditions);
        const popover = screen.getByText(/no ice cream will actually be delivered/i);
        expect(popover).toBeInTheDocument()
        

        // popover disappears when we mouse out
        await user.unhover(termsAndConditions)
        expect(popover).not.toBeInTheDocument()
    });
});
