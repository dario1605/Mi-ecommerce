import '../NavBar/navBar.css';
import React from "react";
import CartWidget from "../Cartwidget";

export const NavBar = () => {
    return (
        <nav className="nav">
                <div className="nav__logo">
                    <a href="$" className="nav__link">Tech Trade</a>
                </div>
                <ul className="nav__lista">
                    <li>
                        <a href="#" className="nav__link">Categoria 1</a>
                    </li>
                    <li>
                        <a href="#" className="nav__link">Categoria 2</a>
                    </li>
                    <li>
                        <a href="#" className="nav__link"><CartWidget /></a>
                    </li>
                </ul>
        </nav>
    );
}

export default NavBar;