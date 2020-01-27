import React from 'react';
import UseDarkMode from '../hooks/UseDarkMode.js';

const NavBar = () => {
    const [darkMode, setDarkMode] = UseDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <nav className="navbar">
            <h1>Women's World Cup Players</h1>
            <div className="dark-mode__toggle">
                <div
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
            <h3>June-July, 2019, Worldwide</h3>

        </nav >
    );
};

export default NavBar;