const CartLayout = props => {

    let items = props.items;

    return (
        <div className="cart-layout">
            {items.filter(item => item.quantity > 0).map(item => (
                <div className='item' key={item.id}>
                    <div className="name">{item.name}</div>
                    <img src={require(`../assets/${item.img}.jpg`)} alt={item.img} />
                    <div className="price">{`$${item.price}.00`}</div>
                </div>
            ))}
            <div>CHECKOUT</div>
        </div>
    )
}

export default CartLayout;