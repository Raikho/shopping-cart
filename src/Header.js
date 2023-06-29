import { NavLink } from 'react-router-dom';

const Header = props => {
    return (
        <div className="header">
            <div className="store-title">ClothesShop</div>
            <div className="nav-container">
                <NavLink to='/' >Home</NavLink>
                <NavLink to='shop/all' >Shop</NavLink>
                <NavLink to='contact' >Contact</NavLink>
            </div>
            <div className="cart-button">Cart</div>
        </div>
    )
}

export default Header;