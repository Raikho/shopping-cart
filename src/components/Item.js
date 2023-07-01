const Item = props => {
    const { handleAddItem } = props;
    const { name, price, id, img, quantity } = props.item;

    return (
        <div className="item">
            <div className="name">{name}</div>
            <img src={require(`../assets/${img}.jpg`)} alt={img} />
            <div className="price">{`$${price}.00`}</div>
            <button onClick={() => handleAddItem(id)}>Buy</button>
        </div>
    )
}

export default Item;