import React from 'react';
import Header from './Header';

const HeaderList = () => {
    return (
        <ul className="header__navList">
            <Header path="/" name="Home"/>
            <Header path="/grade" name="Grade"/>
        </ul>
    );
}

export default HeaderList