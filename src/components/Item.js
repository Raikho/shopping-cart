const Item = props => {
    const { handleChangeQuantity } = props;
    const { name, price, id, img, quantity } = props.item;

    const onSubtract = () => {handleChangeQuantity(id, -1);}
    const onAdd = () => {handleChangeQuantity(id, 1);}

    return (
        <div className="item">
            <img src={require(`../assets/${img}.jpg`)} alt={img} />
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
    )
}

export default Item;