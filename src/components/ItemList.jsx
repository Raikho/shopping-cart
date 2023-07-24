import React from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item.jsx'

export default function ItemList({ getItems, onChangeAmount }) {

    const items = getItems(useParams().cat);

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