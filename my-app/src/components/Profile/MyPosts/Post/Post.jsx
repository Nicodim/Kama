import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
            <div className={s.post__item}>
                <img src="https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg"/>
                {props.massage}
                <div>
                <span>like</span>{props.like}
                </div>
            </div>

    )
}
export default  Post;
