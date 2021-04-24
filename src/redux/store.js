import profileReducer from "./profilePage-reducer";
import messageDataPageReducer from "./messagesDataPage-reducer";
import sideBarReducer from "./sideBar-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: '1', post: 'Hi, how are you?', like: '10'},
                {id: '2', post: 'It\'s my first post', like: '101'},
                {id: '3', post: 'You are most popular programmer!!! ', like: '12'},
                {id: '4', post: 'You are most salary programmer!!! ', like: '12'},
            ],
            newPostText: "it-kamasutra2"
        },
        messagesDataPage: {
            messagesData: [
                {id: '1', message: 'Yuf-uf23'},
                {id: '2', message: 'Hi!'},
                {id: '3', message: 'How are you?'},
                {id: '4', message: 'Yozh2222'},
            ],
            dialogsData: [
                {id: '1', name: 'Dima'},
                {id: '2', name: 'Kozinak'},
                {id: '3', name: 'Bolodia'},
                {id: '4', name: 'Andrew'},
                {id: '5', name: 'Constantin'},
                {id: '6', name: 'Valentin'},
            ],
            newMessageBody: ""
        },
        sideBar: {}
    },

    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesDataPage = messageDataPageReducer(this._state.messagesDataPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);

    }

};

export default store;

window.store = store;
