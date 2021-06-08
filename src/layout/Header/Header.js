import React from "react";
import { Link } from "react-router-dom";

function Header() {

    const Navigation = () => {
        return (
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__li">
                        <Link to="/react-drum-machine/">Home</Link>
                    </li>
                    <li className="header__li">
                        <Link to="/react-drum-machine/drum-machine">Drum Machine</Link>
                    </li>
                </ul>
            </nav>
        )
    }

    return (
        <header className="header">
            <div className="container header__container">
                <Navigation />
            </div>
        </header>
    )
}

export default Header;