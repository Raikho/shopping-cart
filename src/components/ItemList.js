import { useParams } from 'react-router-dom';

const ItemList = props => {
    const { getItems, handleAddItem } = props;

    const items = getItems(useParams().cat);

    return (
        <div className="item-list">
            {items.map(item => (
                <div className='item' key={item.id}>
                    <div className="name">{item.name}</div>
                    <img src={require(`../assets/${item.img}.jpg`)} alt={item.img} />
                    <div className="price">{`$${item.price}.00`}</div>
                    <button onClick={() => handleAddItem(item.id)}>Buy</button>
                </div>
            ))}
        </div>
    )
}

export default ItemList;