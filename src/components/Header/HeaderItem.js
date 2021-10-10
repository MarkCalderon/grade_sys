import React from 'react';
import {NavLink} from 'react-router-dom';

const HeaderItem = ({path, name}) => {
    return (
        <li className="header__navItem">
            <NavLink to={path} exact>{name}</NavLink>
        </li>
    )
}

export default HeaderItem;