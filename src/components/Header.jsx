import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ItemsContext } from './App';

export default function Header({ title, total }) {

    const { getNumCart, getTotalCart } = useContext(ItemsContext);

    return (
        <div className="header">
            <div className="store-title">{title}</div>
            <nav className="nav-container">
                <NavLink to="/">Home</NavLink>
                <NavLink to="shop/all">Shop</NavLink>
                <NavLink to="contact">Contact</NavLink>
            </nav>
            <NavLink to="shop/cart" data-testid='cart-link'>
                Cart: (${getTotalCart()}.00)
            </NavLink>
        </div>
    );
}