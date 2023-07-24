import { NavLink } from 'react-router-dom';

export default function Header({ title, total }) {
    return (
        <div className="header">
            <div className="store-title">{title}</div>
            <nav className="nav-container">
                <NavLink to="/">Home</NavLink>
                <NavLink to="shop/all">Shop</NavLink>
                <NavLink to="contact">Contact</NavLink>
            </nav>
            <NavLink to="shop/cart" data-testid='cart-link'>
                Cart: (${total}.00)
            </NavLink>
        </div>
    );
}