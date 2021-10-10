import React from 'react';
import HeaderItem from './HeaderItem';

const HeaderList = () => {
    return (
        <ul className="header__navList">
            <HeaderItem path="/" name="Home"/>
            <HeaderItem path="/grade" name="Grade"/>
        </ul>
    );
}

export default HeaderList