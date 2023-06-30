import { useOutletContext } from 'react-router-dom';

const ItemList = props => {

    const [items] =  useOutletContext();

    return (
        <div className="item-list">
            {items.map(item => (
                <div className='item'>
                    <div className="name">{item.name}</div>
                    <img src={require(`./assets/${item.img}.jpg`)} alt={item.img} />
                    <div className="price">{`$${item.price}.00`}</div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;