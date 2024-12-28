import React from "react";
import s from "./Users.module.css";

const Users = (props) => {

    if (props.usersPage.length === 0) {

        props.setUsers([
            {
                id: 1,
                followed: true,
                name: "Lola",
                location: {country: 'United States', city: 'New York'},
                image: "https://masterpiecer-images.s3.yandex.net/0b6429fb5de911ee814f963c1ee369ba:upscaled",
                message: 'Things are about to get Wilde.'
            },
            {
                id: 2,
                followed: false,
                name: "Demi",
                location: {country: 'Canada', city: 'Quebec'},
                image: "https://masterpiecer-images.s3.yandex.net/f160d7573d1011eea399b29646062438:upscaled",
                message: 'Be the main character of your story.'
            },
            {
                id: 3,
                followed: true,
                name: "Eliza",
                location: {country: 'Scotland', city: 'Edinburgh'},
                image: "https://img.freepik.com/free-photo/3d-fox-cartoon-illustration_23-2151395236.jpg?semt=ais_hybrid",
                message: 'A legend in the Making.'
            },
            {
                id: 4,
                followed: true,
                name: "Bella",
                location: {country: 'United States', city: 'San Diego'},
                image: "https://masterpiecer-images.s3.yandex.net/92ad4927464c11eeb50b963c1ee369ba:upscaled",
                message: "I don't follow trends. I set them."
            },
            {
                id: 5,
                followed: false,
                name: "Robin",
                location: {country: 'England', city: 'London'},
                image: "https://masterpiecer-images.s3.yandex.net/4ada9dfe857111ee9b847a2f0d1382ba:upscaled",
                message: "You say 'flair for the dramatics' like it's a bad thing."
            },
        ])
    }

    return (
        <div className={s.users}>
            {props.usersPage.map(u => {
                return (
                    <div  key={u.id} className={s.user}>
                        <div className={s.userImage}>
                            <img src={u.image} alt={`${u.name} avatar`}/>
                            <button onClick={() => {u.followed ? props.unfollow(u.id) : props.follow(u.id)}}>
                                {u.followed ? 'UNFOLLOW' : 'FOLLOW'}
                            </button>
                        </div>
                        <div className={s.userContent}>
                            <div className={s.userInfo}>
                                <span>{u.name}</span>
                                <span>{u.location.country},<br/>{u.location.city}</span>
                            </div>
                            <div className={s.userQuote}>
                                {u.message}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Users;