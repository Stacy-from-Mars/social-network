import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likes: 15},
                {id: 2, message: "It's my first message.", likes: 20},
            ],
            newPostText: "new post text"
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Lola", image: "https://masterpiecer-images.s3.yandex.net/0b6429fb5de911ee814f963c1ee369ba:upscaled"},
                {id: 2, name: "Demi", image: "https://masterpiecer-images.s3.yandex.net/f160d7573d1011eea399b29646062438:upscaled"},
                {id: 3, name: "Eliza", image: "https://img.freepik.com/free-photo/3d-fox-cartoon-illustration_23-2151395236.jpg?semt=ais_hybrid"},
                {id: 4, name: "Bella", image: "https://masterpiecer-images.s3.yandex.net/92ad4927464c11eeb50b963c1ee369ba:upscaled"},
                {id: 5, name: "Robin", image: "https://masterpiecer-images.s3.yandex.net/4ada9dfe857111ee9b847a2f0d1382ba:upscaled"},
            ],
            messages: [
                {message: "Hello!"},
                {message: "How are you?"},
                {message: "You`re done great!"},
            ],
            newMessageText: "new message text"
        },
        sidebar: {
            friends: [
                {id: 1, name: "Lola", image: "https://masterpiecer-images.s3.yandex.net/0b6429fb5de911ee814f963c1ee369ba:upscaled"},
                {id: 2, name: "Demi", image: "https://masterpiecer-images.s3.yandex.net/f160d7573d1011eea399b29646062438:upscaled"},
                {id: 3, name: "Eliza", image: "https://img.freepik.com/free-photo/3d-fox-cartoon-illustration_23-2151395236.jpg?semt=ais_hybrid"},
                {id: 4, name: "Bella", image: "https://masterpiecer-images.s3.yandex.net/92ad4927464c11eeb50b963c1ee369ba:upscaled"},
                {id: 5, name: "Robin", image: "https://masterpiecer-images.s3.yandex.net/4ada9dfe857111ee9b847a2f0d1382ba:upscaled"},
            ],
            newFriendsArray: []
        }
    },
    _callSubscriber() {
        console.log("State changed")
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }

}

window.store = store;

export default store;