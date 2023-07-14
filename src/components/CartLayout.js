import { Outlet } from "react-router-dom";

const CartLayout = props => {
    const { handleReset, total } = props;

    return (
        <div className="cart-layout">
            <Outlet />
            <div className="cart-buttons">
                <div className="cart-total">{`Total: $${total}.00`}</div>
                <button className='reset' onClick={handleReset}>Reset</button>
                <button className='checkout'>Checkout</button>
            </div>
        </div>
    )
}

export default CartLayout;