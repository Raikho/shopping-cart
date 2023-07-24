import React from "react";
import { Outlet } from "react-router-dom";

export default function CartLayout({ total, onReset }) {
    return (
        <div className="cart-layout">
            <Outlet />
            <div className="cart-buttons">
                <div className="cart-total">{`Total: $${total}.00`}</div>
                <button className='reset' onClick={onReset}>Reset</button>
                <button className='checkout'>Checkout</button>
            </div>
        </div>
    );
}