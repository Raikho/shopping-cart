import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function MainLayout() {

    return (
        <>
            <Header title="Fish Supply" total={50}/>
            <Outlet />
            <div className="footer">Footer</div>
        </>
    )
};