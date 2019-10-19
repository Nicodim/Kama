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

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Pupa'},
        {id: 2, name: 'Lupa'},
        {id: 3, name: 'Pepe'},
        {id: 4, name: 'Meme'},
        {id: 5, name: 'Boi'}

    ]

    let MassageData = [
        {id: 1, massage: 'Ti cho pes??'},
        {id: 2, massage: 'shalnaja imperatrica'},
        {id: 3, massage: 'are you ohuel?'},
        {id: 4, massage: 'react super'},
        {id: 5, massage: 'taki da'}

    ]
    return (
        <section className={s.dialogs}>
            <div className={s.content__list}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[4].id}/>
            </div>
            <div className={s.massage__list}>
                <Massage massage={MassageData[0].massage} id={MassageData[0].id}/>
                <Massage massage={MassageData[2].massage} id={MassageData[2].id}/>
                <Massage massage={MassageData[3].massage} id={MassageData[3].id}/>
            </div>

        </section>
    )
}

export default Dialogs;
