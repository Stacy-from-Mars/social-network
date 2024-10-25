import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img
                src="https://play-lh.googleusercontent.com/Hv6wSP7YVpV-rZXgotOEKL5JOnwuWn_WA2dC2V3oDe0F7pw86ScZ8cL3tHZwTIrrmjg=w240-h480-rw"/>
            My post
            <div>
                <button>
                    like
                </button>
            </div>
        </div>
)
}

export default Post;