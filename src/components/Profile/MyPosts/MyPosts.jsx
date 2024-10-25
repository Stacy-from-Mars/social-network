import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = () => {
return (
    <div className={s.posts}>
        My posts
        <div>
            <textarea></textarea>
            <button>Add Post</button>
            <button>Remove</button>
        </div>
    </div>
)}

export default MyPosts;