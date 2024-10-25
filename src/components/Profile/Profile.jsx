import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='src/components/Profile/Profile'/>
            </div>
            <div className={s.item}>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;