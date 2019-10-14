import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return <nav className={s.mainNav}>
        <ul className={s.nav__list}>
            <li className={s.nav__option}><a>Profile</a></li>
            <li className={s.nav__option}><a>massage</a></li>
            <li className={s.nav__option}><a>news</a></li>
            <li className={s.nav__option}><a>music</a></li>
            <li className={s.nav__option}><a>settings</a></li>
        </ul>
    </nav>
}
export default  Navbar;
