import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function MainLayout({ total }) {

    return (
        <div className="main-layout">
            <Header title="Fish Supply" total={total}/>
            <Outlet />
            <div className="footer">Footer</div>
        </div>
    )
}