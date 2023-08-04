import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Item from './Item.jsx'

export default function ItemList({ getItems, onChangeAmount, isCart }) {

    const path = useLocation();
    console.log('uselocation: ', path);

    const paramsCat = useParams().cat;
    const items = getItems( isCart ? 'cart' : paramsCat);
    console.log(`Actual params is: %c${paramsCat}`, "color: #bada55"); // debug

    return (
        <div className="item-list">
            {items.map(item => (
                <Item 
                    key={item.id}
                    item={item}
                    onChangeAmount={onChangeAmount}
                />
            ))}
        </div>
    );
}