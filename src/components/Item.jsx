export default function Item({ item, onChangeAmount }) {
    const { name, id } = item;

    const handleAdd = () => {onChangeAmount(id, 1)};
    const handleSubtract = () => {onChangeAmount(id, -1)};

    return (
        <div className="item">
            <div className="desc">
                <div className="name">{name}</div>
            </div>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSubtract}>-</button>
        </div>
    );
}