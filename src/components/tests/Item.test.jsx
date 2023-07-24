import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Item from '../Item';

const mockItem = {name: 'Betta', cat: 'fresh', price: 9, id: 123, img: 'betta', quantity: 0};

describe('Item component', () => {
    it('renders', () => {
        const { container } = render(<Item item={mockItem}/>)
        expect(container).toMatchSnapshot();
    });

    it('renders using given fields', () => {
        const item = mockItem;
        render(<Item item={item} />);
        expect(screen.getByText('Betta')).toBeInTheDocument();
        expect(screen.getByText('$9.00')).toBeInTheDocument();
    });

    it('renders correct buttons at 0 quantity', async () => {
        const user = userEvent.setup();
        const mock = vi.fn();
        render(<Item item={mockItem} onChangeAmount={mock}/>)

        const addButton = screen.getByRole("button", {name: "Add"});
        expect(screen.queryByText("+")).not.toBeInTheDocument();
        expect(screen.queryByText("-")).not.toBeInTheDocument();

        await user.click(addButton);
        expect(mock).toHaveBeenCalled();
    });

    it('renders correct buttons at 1+ quantity', async() => {
        const user = userEvent.setup();
        const mock = vi.fn();
        render(<Item item={{...mockItem, quantity: 9}}  onChangeAmount={mock}/>)

        expect(screen.queryByText("add")).not.toBeInTheDocument();
        expect(screen.queryByText("9")).toBeInTheDocument();
        const addButton = screen.getByRole("button", {name: "+"});
        const subtractButton = screen.getByRole("button", {name: "-"});

        await user.click(addButton);
        await user.click(subtractButton);
        expect(mock).toHaveBeenCalledTimes(2);
    });
});
