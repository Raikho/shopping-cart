
import uniqid from 'uniqid';
import { useState } from 'react';

const Shop = () => {
    const [items, setItems] = useState([
        {name: 'shirt', id: uniqid()},
        {name: 'pants', id: uniqid()},
        {name: 'jacket', id: uniqid()},
        {name: 'sweater', id: uniqid()},
        {name: 'socks', id: uniqid()},
        {name: 'belt', id: uniqid()},
    ]);

    return (
        <div className='shop'>
            <div className='title'>Shop</div>
            <div className="item-container">
                {items.map(item => 
                    <div 
                        className='item'
                        key={item.id}
                    >
                        {item.name}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Shop;