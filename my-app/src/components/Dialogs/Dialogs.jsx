import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.content__item}><NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink></div>
    )
}

const Massage = (props) => {
    return (
        <div className={s.massage__item}>{props.massage}</div>
    )
}

const Dialogs = () => {
    return (
        <section className={s.dialogs}>
            <div className={s.content__list}>
                <DialogItem name="Pupa" id="1"/>
                <DialogItem name="Lupa" id="2"/>
                <DialogItem name="Pupa" id="3"/>
                <DialogItem name="Lupa" id="4"/>
            </div>
            <div className={s.massage__list}>
                <Massage massahe="шутки за триста"/>
                <Massage massahe="шутки за триста"/>
                <Massage massahe="шутки за триста"/>
            </div>

        </section>
    )
}

export default Dialogs;
