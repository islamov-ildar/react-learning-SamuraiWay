import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profilePage-reducer";
import MyPost from "./MyPost";
import StoreContext, {connect} from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

// const MyPostContainer = (props) => {
//     console.log("+++");
//     console.log(props);
//
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 let state = store.getState();
//
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 }
//
//                 let onPostChange = (text) => {
//                     let action = updateNewPostActionCreator(text);
//                     store.dispatch(action);
//                 };
//
//                 return (
//                     <MyPost updateNewPostText={onPostChange}
//                             addPost={addPost}
//                             posts={state.profilePage.postsData}
//                             newPostText={state.profilePage.newPostText}/>
//                 )
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps2 = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}


let mapDispatchToProps2 = (dispatch) => {
    return {
        addPost: () => { dispatch(addPostActionCreator())},

        updateNewPostText: (text) => {
            let action = updateNewPostActionCreator(text);
            dispatch(action);
        }
    }
}

const MyPostContainer = connect(mapStateToProps2, mapDispatchToProps2)(MyPost);

export default MyPostContainer;