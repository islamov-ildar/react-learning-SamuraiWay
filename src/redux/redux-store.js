import {combineReducers, createStore} from "redux";
import profileReducer from "./profilePage-reducer";
import messageDataPageReducer from "./messagesDataPage-reducer";
import sideBarReducer from "./sideBar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesDataPage: messageDataPageReducer,
    sideBar: sideBarReducer
});

let store = createStore(reducers);

export default store;