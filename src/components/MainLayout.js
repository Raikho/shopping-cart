import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.js';

const MainLayout = props => {
    let homeClass = (useLocation().pathname === '/') ? ' home' : '';

    return (
        <div className={'main-layout' + homeClass}>
            <Header total={props.total}/>
            <Outlet />
            <div className="footer">Footer</div>
        </div>
    )
}

export default MainLayout;