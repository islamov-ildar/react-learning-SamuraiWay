import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = (props) => {
    //console.log("____");
    //console.log(props);
    let postElement = props.posts.map(
        p => <Post message={p.post} likeCount={p.like} id={p.id}/>
    );

    let onAddPost = () => {
        props.addPost();
    }

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return <div className={s.postBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange = {onPostChange} ref = {newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={ onAddPost }>Add post</button>
            </div>
        </div>
        <div className={s.post}>
            {postElement}
        </div>
    </div>
}

export default MyPost;