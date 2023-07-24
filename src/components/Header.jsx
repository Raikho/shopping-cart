import { Link, NavLink } from 'react-router-dom';

export default function Header({ title, total }) {
    return (
        <div className="header">
            <div className="store-title">{title}</div>
            <nav className="nav-container">
				{/* <NavLink to="profile">Profile page</NavLink> */}
                <Link to="/">Home</Link>
                <Link to="shop">Shop</Link>
                <Link to="contact">Contact</Link>
            </nav>
            <a href="" data-testid='cart-link'>
                Cart: (${total}.00)
            </a>
        </div>
    );
}