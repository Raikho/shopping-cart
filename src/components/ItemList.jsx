import Item from './Item.jsx'

export default function ItemList({ items, onChangeAmount }) {
    return (
        <div className="item-list">
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