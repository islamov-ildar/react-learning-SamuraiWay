import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profilePage-reducer";
import MyPost from "./MyPost";
import StoreContext from "../../../redux/StoreContext";


const MyPostContainer = (props) => {
    console.log("+++");
    console.log(props);

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    let action = updateNewPostActionCreator(text);
                    store.dispatch(action);
                };

                return (
                    <MyPost updateNewPostText={onPostChange}
                            addPost={addPost}
                            posts={state.profilePage.postsData}
                            newPostText={state.profilePage.newPostText}/>
                )
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostContainer;