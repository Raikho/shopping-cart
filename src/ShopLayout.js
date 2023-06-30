import uniqid from 'uniqid';
import { useState } from 'react';
import { Outlet, useParams, NavLink } from 'react-router-dom';

const ShopLayout = props => {

    const cat = useParams().cat;


    const [items, setItems] = useState([
        {name: 'Betta', cat: 'fresh', price: 1, id: uniqid(), img: 'betta'},
        {name: 'Oscar', cat: 'shirts', price: 2, id: uniqid(), img: 'oscar'},
        {name: 'Discus', cat: 'shirts', price: 3, id: uniqid(), img: 'discus'},
        {name: 'Clownfish', cat: 'pants', price: 4, id: uniqid(), img: 'clown-fish'},
        {name: 'Blue Tang', cat: 'pants', price: 1, id: uniqid(), img: 'blue-tang'},
        {name: 'Angel Fish', cat: 'pants', price: 2, id: uniqid(), img: 'angel-fish'},
        {name: 'Fish Bowl', cat: 'shoes', price: 3, id: uniqid(), img: 'fish-bowl'},
        {name: 'Decoration', cat: 'shoes', price: 4, id: uniqid(), img: 'decoration'},
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
                <NavLink to='/shop/fresh'>Freshwater </NavLink>
                <NavLink to='/shop/salt'>Saltwater </NavLink>
                <NavLink to='/shop/supplies'>Supplies </NavLink>
                <NavLink to='/shop/all'>All</NavLink>
            </div>
            <Outlet context={[getItemsByCat()]} />
        </div>
    )
}

export default ShopLayout;