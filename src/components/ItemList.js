import { useParams } from 'react-router-dom';
import Item from './Item.js';

const ItemList = props => {
    const { getItems, handleChangeQuantity } = props;

    const items = getItems(useParams().cat);

    return (
        <div className="item-list">
            {items.map(item => (
                <Item 
                    key={item.id}
                    item={item} 
                    handleChangeQuantity={handleChangeQuantity}
                />
            ))}
        </div>
    )
}

export default ItemList;