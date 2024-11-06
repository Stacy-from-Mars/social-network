import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div className={s.profileImg}>
                <img src="https://c.wallhere.com/photos/5b/22/galaxy_planet-1943031.jpg!d"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;