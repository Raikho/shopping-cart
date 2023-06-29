import { Outlet } from 'react-router-dom';

const ShopLayout = props => {
    return (
        <div className="shop-layout">
            <div className="categories">Shop Categories</div>
            <Outlet />
        </div>
    )
}

export default ShopLayout;