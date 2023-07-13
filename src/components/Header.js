import { NavLink } from 'react-router-dom';

const Header = props => {
    return (
        <div className="header">
            <div className="store-title">Fish Supply</div>
            <div className="nav-container">
                <NavLink to='/' >Home</NavLink>
                <NavLink to='shop/all' >Shop</NavLink>
                <NavLink to='contact' >Contact</NavLink>
            </div>
            <NavLink to='cart' className="cart-button">
                Cart: (${props.total}.00)
            </NavLink>
            {/* <div className="cart-button">Cart: (${props.total}.00)</div> */}
        </div>
    )
}

export default Header;