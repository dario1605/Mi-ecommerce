import '../NavBar/navBar.css';
import React from "react";
import CartWidget from "../Cartwidget";
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="nav">
                <div className="nav__logo">
                    <NavLink to='/' className="nav__link">Tech Trade</NavLink>
                </div>
                <ul className="nav__lista">
                    <li>
                        <NavLink to='/categoria/notebooks' className="nav__link">Notebooks</NavLink>
                    </li>
                    <li>
                        <NavLink to='/categoria/escritorio' className="nav__link">PC-Escrtorio</NavLink>
                    </li>
                    <li>
                        <NavLink to='cart' className="nav__link"><CartWidget /></NavLink>
                    </li>
                </ul>
        </nav>
    );
}

export default NavBar;