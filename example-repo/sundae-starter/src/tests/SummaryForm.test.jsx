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

describe('Popover logic', () => {
    test('should display popover on hover, and hide it on unhover', async () => {
        const user = userEvent.setup();
        render(<SummaryForm />);

        //popover starts out hidden
        const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
        expect(nullPopover).not.toBeInTheDocument();

        //popover appears on mouseover of checkbox label
        const termsAndConditions = screen.getByText(/terms and conditions/i);
        await user.hover(termsAndConditions);
        const popover = screen.getByText(/no ice cream will actually be delivered/i);
        expect(popover).toBeInTheDocument()

        //popover disapears on mouse out
        await user.unhover(termsAndConditions);
        expect(popover).not.toBeInTheDocument()
    });
});
