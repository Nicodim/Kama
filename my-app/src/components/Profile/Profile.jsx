import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <section className={s.content}>
        <div>
            <img src="https://cdn22.img.ria.ru/images/154914/61/1549146138_0:0:3071:1728_600x0_80_0_0_f401568fcc28a6b449e7b0e8ce2fe91c.jpg" />
        </div>
        <div>
            logo + text
        </div>
            <MyPosts />
    </section>
    )
}
export default  Profile;