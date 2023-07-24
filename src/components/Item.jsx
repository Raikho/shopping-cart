import React from "react";

export default function Item({ item, onChangeAmount }) {
    const { name, price, id, img, quantity } = item;

    let imgUrl = new URL(`../assets/${img}.jpg`, import.meta.url);
    const onAdd = () => {onChangeAmount(id, 1)};
    const onSubtract = () => {onChangeAmount(id, -1)};

    return (
        <div className="item">
            <img src={imgUrl} alt={img} />
            <div className="desc">
                <div className="name">{name}</div>
                <div className="price">{`$${price}.00`}</div>
                {quantity > 0 ?
                    <div className='quantity-container'>
                        <button className='adjust' onClick={onSubtract}>-</button>
                        {quantity}
                        <button className='adjust' onClick={onAdd}>+</button>
                    </div> :
                    <button className='add' onClick={onAdd}>Add</button>
                }
            </div>
        </div>
    );
}