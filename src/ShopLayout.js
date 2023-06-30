import { Outlet, NavLink } from 'react-router-dom';

const ShopLayout = props => {
    return (
        <div className="shop-layout">
            <div className="categories">
                <NavLink to='/shop/fresh'>Freshwater</NavLink>
                <NavLink to='/shop/salt'>Saltwater</NavLink>
                <NavLink to='/shop/supplies'>Supplies</NavLink>
                <NavLink to='/shop/all'>All</NavLink>
            </div>
            <Outlet />
        </div>
    )
}

export default ShopLayout;