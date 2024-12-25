const REFRESH_FRIENDS = "REFRESH-FRIENDS";

let initialState = {
    friends: [
        {id: 1, name: "Lola", image: "https://masterpiecer-images.s3.yandex.net/0b6429fb5de911ee814f963c1ee369ba:upscaled"},
        {id: 2, name: "Demi", image: "https://masterpiecer-images.s3.yandex.net/f160d7573d1011eea399b29646062438:upscaled"},
        {id: 3, name: "Eliza", image: "https://img.freepik.com/free-photo/3d-fox-cartoon-illustration_23-2151395236.jpg?semt=ais_hybrid"},
        {id: 4, name: "Bella", image: "https://masterpiecer-images.s3.yandex.net/92ad4927464c11eeb50b963c1ee369ba:upscaled"},
        {id: 5, name: "Robin", image: "https://masterpiecer-images.s3.yandex.net/4ada9dfe857111ee9b847a2f0d1382ba:upscaled"},
    ],
    newFriendsArray: []
}

let fillRandomFriends = (friendsList) => {
    let randomArr = [];
    let generateRandomUserId = function () {
        return Math.floor(Math.random() * friendsList.length) + 1;
    };

    let randomFunc = () => {
        for (let i = 0; i <= 2; i++) {
            let userId;
            while (!userId || randomArr.find(f => f.id === userId)) {
                userId = generateRandomUserId();
            }
            randomArr.push(friendsList.find(f => f.id === userId));
        }
    }
    randomFunc();
    return randomArr;
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case REFRESH_FRIENDS:
            let stateCopy = {
                ...state,
                friends: [...state.friends]
            };
            stateCopy.newFriendsArray = fillRandomFriends(stateCopy.friends);
            return stateCopy;
        default:
            return state;
    }
}

export const refreshFriendsCreator = () => ({type: REFRESH_FRIENDS})

export default sidebarReducer;