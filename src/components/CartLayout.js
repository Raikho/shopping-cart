import { Outlet } from "react-router-dom";

const CartLayout = props => {
    const { handleReset } = props;

    return (
        <div className="cart-layout">
            <Outlet />
            <div className="cart-buttons">
                <button className='reset' onClick={handleReset}>Reset</button>
                <button className='checkout'>Checkout</button>
            </div>
        </div>
    )
}

export default CartLayout;