import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const renderWithRouter = component => {
    const router = createBrowserRouter([{path: "", element: component}]);
    return render(<RouterProvider router = {router} />);
};

describe('Header component shows links', () => {
    it('renders', () => {
        const { container } = renderWithRouter(<Header total={0}/>);
        expect(container).toMatchSnapshot();
    });
    it('renders store title', () => {
        renderWithRouter(<Header title="Fish Supply" />);
        expect(screen.getByText('Fish Supply')).toBeInTheDocument();
    });
    it('renders navlinks', () => {
        renderWithRouter(<Header total={0}/>);
        expect(screen.getByRole('link', {name: 'Home'})).toBeInTheDocument();
        expect(screen.getByRole('link', {name: 'Shop'})).toBeInTheDocument();
        expect(screen.getByRole('link', {name: 'Contact'})).toBeInTheDocument();
    });
    it('renders cart with correct number', () => {
        renderWithRouter(<Header total={11} />);
        let cart = screen.getByTestId('cart-link');
        expect(cart.textContent).toMatch('Cart: ($11.00)');
    });
});
