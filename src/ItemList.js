import { useOutletContext } from 'react-router-dom';

const ItemList = props => {

    const [items] =  useOutletContext();

    return (
        <div className="item-list">
            {items.map(item => (
                <div className='item'>
                    <div className="name">{item.name}</div>
                    <div className="image">-Image-</div>
                    <div className="price">{`$${item.price}.00`}</div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;