import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/messagesDataPage-reducer";
import Dialogs from "./Dialogs";
//import StoreContext, {connect} from "react-redux";

// const DialogsContainer = (props) => {
//
//
//
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//
//                 let state = store.getState().messagesDataPage;
//
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator());
//                 };
//
//                 let onNewMessageChange = (body) => {
//                     store.dispatch(updateNewMessageBodyCreator(body));
//                 };
//
//                 return (
//                     <Dialogs updateNewMessageBody={onNewMessageChange}
//                              sendMessage={onSendMessageClick}
//                              messagesDataPage={state}/>
//                 )
//             }
//
//         }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.messagesDataPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch.updateNewMessageBodyCreator(body)
        },

        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs); //скобки дважды подряд означают вызываемая ф-я возвращает ф-ю, которую мы и вызываем в данный момент

export default DialogsContainer;