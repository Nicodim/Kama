import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <section className={s.dialogs}>
            <ul className={s.content__list}>
                <li className={s.content__item}>Pupa</li>
                <li className={s.content__item}>Lupa</li>
                <li className={s.content__item}>Pupa</li>
                <li className={s.content__item}>Lupa</li>
            </ul>
            <ul className={s.massage__list}>
                <li className={s.massage__item}>Шутки за 300</li>
                <li className={s.massage__item}>Шутки за 300</li>
                <li className={s.massage__item}>Шутки за 300</li>
            </ul>

        </section>
    )
}

export default Dialogs;
