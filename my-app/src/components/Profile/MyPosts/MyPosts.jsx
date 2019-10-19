import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                <textarea></textarea>
                </div>
                <button>Add post</button>
            </div>
        <div className={s.post__list}>
            <Post massage={'Hi world!'} like={8}/>
            <Post massage={'UUUU SUKA'} like={14}/>
            <Post />
            <Post />
            <Post />
        </div>
        </div>
    )
}
export default  MyPosts;
