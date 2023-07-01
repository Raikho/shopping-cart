import { useParams } from 'react-router-dom';
import Item from './Item.js';

const ItemList = props => {
    const { getItems, handleAddItem } = props;

    const items = getItems(useParams().cat);

    return (
        <div className="item-list">
            {items.map(item => (
                <Item 
                    item={item} 
                    handleAddItem={handleAddItem}
                />
            ))}
        </div>
    )
}

export default ItemList;