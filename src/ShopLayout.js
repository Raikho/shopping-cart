import { Outlet } from 'react-router-dom';

const ShopLayout = props => {
    return (
        <div className="shop-layout">
            Shop Layout Test
            <Outlet />
        </div>
    )
}

export default ShopLayout;