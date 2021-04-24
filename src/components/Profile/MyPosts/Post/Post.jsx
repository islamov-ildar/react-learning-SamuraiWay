import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    //console.log(props);
    return <div className={s.item}>
        <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" alt=""/>
        post 1
        <div>{props.message}</div>
        <div className={s.like}>Like <span>{props.likeCount}</span></div>
        </div>
}

export default Post;