import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = [props.posts.map(p => <Post message={p.message} likes={p.likes}/>)]
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type:"ADD-POST"});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text});
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.addPost}>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                <div>
                    <button onClick={addPost}>Add Post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;