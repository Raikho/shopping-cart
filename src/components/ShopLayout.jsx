import { Outlet, NavLink } from "react-router-dom"

export default function ShopLayout() {
    return (
        <div className="shop-layout">
            <div className="categories">
                <NavLink to="all">All</NavLink>
                <NavLink to="fresh">Freshwater</NavLink>
                <NavLink to="salt">Saltwater</NavLink>
                <NavLink to="supplies">Supplies</NavLink>
            </div>
            <Outlet />
        </div>
    )
}