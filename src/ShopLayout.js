import uniqid from 'uniqid';
import { useState } from 'react';
import { Outlet, useParams, NavLink } from 'react-router-dom';

const ShopLayout = props => {

    const cat = useParams().cat;


    const [items, setItems] = useState([
        {name: 'shirt1', cat: 'shirts', price: 1, id: uniqid()},
        {name: 'shirt2', cat: 'shirts', price: 2, id: uniqid()},
        {name: 'shirt3', cat: 'shirts', price: 3, id: uniqid()},
        {name: 'pants1', cat: 'pants', price: 4, id: uniqid()},
        {name: 'pants2', cat: 'pants', price: 1, id: uniqid()},
        {name: 'pants3', cat: 'pants', price: 2, id: uniqid()},
        {name: 'shoes1', cat: 'shoes', price: 3, id: uniqid()},
        {name: 'shoes2', cat: 'shoes', price: 4, id: uniqid()},
        {name: 'shoes3', cat: 'shoes', price: 5, id: uniqid()},
    ]);

    const getItemsByCat = () => {
        if (cat === 'all') return items;
        return items.filter(item => item.cat === cat);
    }

    return (
        <div className="shop-layout">
            {cat}
            <div className="categories">
                <div className="cat-title">Shop Categories</div>
                <NavLink to='/shop/shirts'>Shirts </NavLink>
                <NavLink to='/shop/pants'>Pants </NavLink>
                <NavLink to='/shop/all'>All</NavLink>
            </div>
            <Outlet context={[getItemsByCat()]} />
        </div>
    )
}

export default ShopLayout;