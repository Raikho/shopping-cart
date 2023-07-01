const Item = props => {
    const { handleChangeQuantity } = props;
    const { name, price, id, img, quantity } = props.item;

    const onSubtract = () => {handleChangeQuantity(id, -1);}
    const onAdd = () => {handleChangeQuantity(id, 1);}

    return (
        <div className="item">
            <div className="name">{name}</div>
            <img src={require(`../assets/${img}.jpg`)} alt={img} />
            <div className="price">{`$${price}.00`}</div>
            {quantity > 0 ?
                <div>
                    <button onClick={onSubtract}>-</button>
                    {quantity}
                    <button onClick={onAdd}>+</button>
                </div> :
                <button onClick={onAdd}>Buy</button>
            }
        </div>
    )
}

export default Item;