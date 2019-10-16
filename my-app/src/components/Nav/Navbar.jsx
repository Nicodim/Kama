import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={s.mainNav}>
        <ul className={s.nav__list}>
            <li className={s.nav__option}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
            <li className={s.nav__option}><NavLink to="/Dialogs" activeClassName={s.active}>massage</NavLink></li>
            <li className={s.nav__option}><NavLink to="/News" activeClassName={s.active}>news</NavLink></li>
            <li className={s.nav__option}><NavLink to="/Music" activeClassName={s.active}>music</NavLink></li>
            <li className={s.nav__option}><NavLink to="/Settings" activeClassName={s.active}>settings</NavLink></li>
        </ul>
    </nav>
}
export default  Navbar;
