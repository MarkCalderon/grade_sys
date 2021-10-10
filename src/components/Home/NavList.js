import React from 'react';
import NavItem from './NavItem';

import './NavList.scss';

const NavList = () => {

    const NavData = [
        {
            path: 'grade',
            name: 'grade',
        },
        {
            path: 'subject',
            name: 'subject',
        },
        {
            path: 'user',
            name: 'user',
        },
    ]


    return (
        <ul className="navList">
            {
                NavData.map(item => {
                    return (
                        <NavItem path={item.path} name={item.name} />
                    )
                })
            }
        </ul>
    )
}

export default NavList;