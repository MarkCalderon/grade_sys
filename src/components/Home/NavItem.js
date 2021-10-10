import React from 'react';
import {NavLink} from 'react-router-dom';

import './NavItem.scss';

const NavItem = ({path, name}) => {
    return (
        <li className="navItem">
            <NavLink className="navItem__link" to={path} exact>{name}</NavLink>
        </li>
    )
}

export default NavItem;