import uniqid from 'uniqid';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const ShopLayout = props => {

    const [items, setItems] = useState([
        {name: 'item1', price: 1, id: uniqid()},
        {name: 'item2', price: 2, id: uniqid()},
        {name: 'item3', price: 3, id: uniqid()},
        {name: 'item4', price: 4, id: uniqid()},
        {name: 'item5', price: 1, id: uniqid()},
        {name: 'item6', price: 2, id: uniqid()},
        {name: 'item7', price: 3, id: uniqid()},
        {name: 'item8', price: 4, id: uniqid()},
        {name: 'item9', price: 5, id: uniqid()},
    ]);

    return (
        <div className="shop-layout">
            <div className="categories">Shop Categories</div>
            <Outlet context={[items]} />
        </div>
    )
}

export default ShopLayout;