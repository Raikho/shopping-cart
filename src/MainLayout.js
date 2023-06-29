import { Outlet } from 'react-router-dom';

const MainLayout = props => {
    console.log(props);
    return (
        <div className="main-layout">
            <div className="header">Header</div>
            <Outlet />
            <div className="header">Footer</div>
        </div>
    )
}

export default MainLayout;