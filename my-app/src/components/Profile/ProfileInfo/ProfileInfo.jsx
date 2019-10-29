import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <section>
        <div>
            <img src="https://cdn22.img.ria.ru/images/154914/61/1549146138_0:0:3071:1728_600x0_80_0_0_f401568fcc28a6b449e7b0e8ce2fe91c.jpg" />
        </div>
        <div className={s.descriptionBlock}>
            logo + text
        </div>
    </section>
    )
}
export default  ProfileInfo;
