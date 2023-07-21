import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Header from '../Header';

describe('Header component shows links', () => {
    it('renders', () => {
        const { container } = render(<Header total={0}/>);
        expect(container).toMatchSnapshot();
    });
    it('renders store title', () => {
        render(<Header title="Fish Supply" />);
        expect(screen.getByText('Fish Supply')).toBeInTheDocument();
    });
    it('renders navlinks', () => {
        render(<Header total={0}/>);
        expect(screen.getByRole('link', {name: 'Home'})).toBeInTheDocument();
        expect(screen.getByRole('link', {name: 'Shop'})).toBeInTheDocument();
        expect(screen.getByRole('link', {name: 'Contact'})).toBeInTheDocument();
    });
    it('renders cart with correct number', () => {
        render(<Header total={11} />);
        let cart = screen.getByTestId('cart-link');
        expect(cart.textContent).toMatch('Cart: ($11.00)');
    });
});
