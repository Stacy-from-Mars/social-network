const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS"

let initialState = {
    users: [
        {id: 1, followed: true, name: "Lola", location: {country: 'United States', city: 'New York'},
            image: "https://masterpiecer-images.s3.yandex.net/0b6429fb5de911ee814f963c1ee369ba:upscaled",
            message: 'Things are about to get Wilde.'},
        {id: 2, followed: false, name: "Demi", location: {country: 'Canada', city: 'Quebec'},
            image: "https://masterpiecer-images.s3.yandex.net/f160d7573d1011eea399b29646062438:upscaled",
            message: 'Be the main character of your story.'},
        {id: 3, followed: true, name: "Eliza", location: {country: 'Scotland', city: 'Edinburgh'},
            image: "https://img.freepik.com/free-photo/3d-fox-cartoon-illustration_23-2151395236.jpg?semt=ais_hybrid",
            message: 'A legend in the Making.'},
        {id: 4, followed: true, name: "Bella", location: {country: 'United States', city: 'San Diego'},
            image: "https://masterpiecer-images.s3.yandex.net/92ad4927464c11eeb50b963c1ee369ba:upscaled",
            message: "I don't follow trends. I set them."},
        {id: 5, followed: false, name: "Robin", location: {country: 'England', city: 'London'},
            image: "https://masterpiecer-images.s3.yandex.net/4ada9dfe857111ee9b847a2f0d1382ba:upscaled",
            message: "You say 'flair for the dramatics' like it's a bad thing."},
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;