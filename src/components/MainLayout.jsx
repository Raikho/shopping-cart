import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ total }) {
    const path = useLocation().pathname;
    let pathClass = '';
    if (path === '/') pathClass = ' home';
    else if (path.startsWith('/shop')) pathClass = ' shop';

    return (
        <div className={"main-layout" + pathClass}>
            <Header title="Fish Supply" total={total}/>
            <Outlet />
            <Footer />
        </div>
    )
}

MainLayout.propTypes = {total: PropTypes.number};