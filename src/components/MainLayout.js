import { Outlet, useLocation, Link } from 'react-router-dom';
import Header from './Header.js';

const MainLayout = props => {
    const path = useLocation().pathname;
    let pathClass = '';
    
    if (path === '/') pathClass = ' home';
    else if (path.startsWith('/shop')) pathClass = ' shop'

    return (
        <div className={'main-layout' + pathClass}>
            <Header total={props.total}/>
            <Outlet />
            <div className="footer">
                <a href='https://github.com/Raikho/shopping-cart' className="icon git">
                </a>
            </div>
        </div>
    )
}

export default MainLayout;