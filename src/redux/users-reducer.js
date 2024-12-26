
let initialState = {
    users: [
        {id: 1, followed: true, name: "Lola", location: {country: 'United States', city: 'New York'},
            image: "https://masterpiecer-images.s3.yandex.net/0b6429fb5de911ee814f963c1ee369ba:upscaled"},
        {id: 2, followed: false, name: "Demi", location: {country: 'Canada', city: 'Quebec'},
            image: "https://masterpiecer-images.s3.yandex.net/f160d7573d1011eea399b29646062438:upscaled"},
        {id: 3, followed: true, name: "Eliza", location: {country: 'Scotland', city: 'Edinburgh'},
            image: "https://img.freepik.com/free-photo/3d-fox-cartoon-illustration_23-2151395236.jpg?semt=ais_hybrid"},
        {id: 4, followed: true, name: "Bella", location: {country: 'United States', city: 'San Diego'},
            image: "https://masterpiecer-images.s3.yandex.net/92ad4927464c11eeb50b963c1ee369ba:upscaled"},
        {id: 5, followed: false, name: "Robin", location: {country: 'England', city: 'London'},
            image: "https://masterpiecer-images.s3.yandex.net/4ada9dfe857111ee9b847a2f0d1382ba:upscaled"},
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default usersReducer;