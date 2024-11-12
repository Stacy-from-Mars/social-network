import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {message: "Hi, how are you?", likes: 15},
        {message: "It's my first message.", likes: 20}
    ];

    let postItems = [posts.map(p => <Post message={p.message} likes={p.likes}/>)]

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
                {postItems}
            </div>
        </div>
    )
}

export default MyPosts;