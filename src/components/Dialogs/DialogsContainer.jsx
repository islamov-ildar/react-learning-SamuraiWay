import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/messagesDataPage-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../redux/StoreContext";

const DialogsContainer = (props) => {



    return (
        <StoreContext.Consumer>
            {
            (store) => {

                let state = store.getState().messagesDataPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                };

                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                };

                return (
                    <Dialogs updateNewMessageBody={onNewMessageChange}
                             sendMessage={onSendMessageClick}
                             messagesDataPage={state}/>
                )
            }

        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;