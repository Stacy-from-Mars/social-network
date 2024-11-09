import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {message: "Hi, how are you?", likes: 15},
        {message: "It's my first message.", likes: 20}
    ];

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postsData[0].message} likes={postsData[0].likes}/>
                <Post message={postsData[1].message} likes={postsData[1].likes}/>
            </div>
        </div>
    )
}

export default MyPosts;