import uniqid from 'uniqid';
import { useState } from 'react';
import { Outlet, useParams, NavLink } from 'react-router-dom';

const ShopLayout = props => {

    const cat = useParams().cat;


    const [items, setItems] = useState([
        {name: 'Betta', cat: 'fresh', price: 9, id: uniqid(), img: 'betta'},
        {name: 'Oscar', cat: 'fresh', price: 3, id: uniqid(), img: 'oscar'},
        {name: 'Discus', cat: 'fresh', price: 5, id: uniqid(), img: 'discus'},
        {name: 'Clownfish', cat: 'salt', price: 3, id: uniqid(), img: 'clown-fish'},
        {name: 'Blue Tang', cat: 'salt', price: 4, id: uniqid(), img: 'blue-tang'},
        {name: 'Angel Fish', cat: 'salt', price: 6, id: uniqid(), img: 'angel-fish'},
        {name: 'Fish Bowl', cat: 'supplies', price: 18, id: uniqid(), img: 'fish-bowl'},
        {name: 'Decoration', cat: 'supplies', price: 10, id: uniqid(), img: 'decoration'},
    ]);

    const getItemsByCat = () => {
        if (cat === 'all') return items;
        return items.filter(item => item.cat === cat);
    }

    return (
        <div className="shop-layout">
            <div className="categories">
                <NavLink to='/shop/fresh'>Freshwater</NavLink>
                <NavLink to='/shop/salt'>Saltwater</NavLink>
                <NavLink to='/shop/supplies'>Supplies</NavLink>
                <NavLink to='/shop/all'>All</NavLink>
            </div>
            <Outlet context={[getItemsByCat()]} />
        </div>
    )
}

export default ShopLayout;