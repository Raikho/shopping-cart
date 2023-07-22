import Item from './Item'

export default function ItemList({ items, onChangeAmount }) {
    return (
        <div className="item-list">
            ItemList
            {items.map(item => (
                <Item 
                    key={item.id}
                    item={item}
                    onChangeAmount={onChangeAmount}
                />
            ))}
        </div>
    );
}