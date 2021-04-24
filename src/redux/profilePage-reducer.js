const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST-TEXT";

let initialState = {
        postsData: [
            {id: '1', post: 'Hi, how are you?', like: '10'},
            {id: '2', post: 'It\'s my first post', like: '101'},
            {id: '3', post: 'You are most popular programmer!!! ', like: '12'},
            {id: '4', post: 'You are most salary programmer!!! ', like: '12'},
        ],
        newPostText: "it-kamasutra2"
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                like: 0
            }
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST}) // - короткая запись функции создания объекта.

export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST,
        newText: text
    }
};

export default profileReducer;