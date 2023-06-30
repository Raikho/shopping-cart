import { Outlet } from 'react-router-dom';
import Header from './Header.js';

const MainLayout = props => {
    return (
        <div className="main-layout">
            <Header />
            <Outlet />
            <div className="footer">Footer</div>
        </div>
    )
}

export default MainLayout;