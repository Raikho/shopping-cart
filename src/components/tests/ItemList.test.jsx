import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ItemList from '../ItemList.jsx';

vi.mock('../Item.jsx', () => ({
    default: ({ item, onChangeAmount }) => 
        <>
            <div>{item.name}</div>
            <button onClick={onChangeAmount}>{`add${item.name}`}</button>
        </> 
}));
const mockFn = vi.fn();
const mockItems = [{name: 'Betta', id: 1}, {name: 'Oscar', id: 2}];

describe('ItemList component', () => {
    it('renders', () => {
        const { container } = render(<ItemList 
            items={mockItems} onChangeAmount={mockFn} />);
        expect(container).toMatchSnapshot();
    });

    it('renders each item', () => {
        render(<ItemList items={mockItems} onChangeAmount={mockFn} />);
        expect(screen.queryByText('Betta')).toBeInTheDocument();
        expect(screen.queryByText('Oscar')).toBeInTheDocument();
    });

    it('passes along amount function', async() => {
        render(<ItemList items={mockItems} onChangeAmount={mockFn} />);
        const user = userEvent.setup();
        const button = screen.getByRole('button', {name: 'addBetta'});
        await user.click(button);
        expect(mockFn).toHaveBeenCalled();
    });
});
