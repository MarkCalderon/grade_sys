import React from 'react';
import './Header.scss';

import HeaderList from './HeaderList';

const Header = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <div className="header__logo">
                    <h1 className="header__logoText">Grading App</h1>
                </div>
                <div className="header__nav">
                    <HeaderList />
                </div>

            </div>
        </header>
    );
}

export default Header;