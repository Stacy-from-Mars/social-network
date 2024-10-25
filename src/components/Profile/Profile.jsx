import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
return (
    <div className={s.content}>
        <div>
            <img src='src/components/Profile/Profile'/>
        </div>
        <div className={s.item}>
            ava + description
        </div>
        <div>
            My post
            <div>
                New post
            </div>
        </div>
        Content
    </div>
)}

export default Profile;