import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";

export default function MainLayout({ total }) {
    const path = useLocation().pathname;
    let pathClass = '';
    if (path === '/') pathClass = ' home';
    else if (path.startsWith('/shop')) pathClass = ' shop';

    return (
        <div className={"main-layout" + pathClass}>
            <Header title="Fish Supply" total={total}/>
            <Outlet />
            <div className="footer">Footer</div>
        </div>
    )
}