import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/messagesDataPage-reducer";

const Dialogs = (props) => {

    let state = props.messagesDataPage;

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {   //e - event
        let body = e.target.value;
        //props.store.dispatch(updateNewMessageBodyCreator(body));
        props.updateNewMessageBody(body);
    };

    let dialogsElement = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElement = state.messagesData.map(message => <Message messageText={message.message}
                                                                           id={message.id}/>);

    let newMessageBody = state.newMessageBody;

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>

                {dialogsElement}

            </div>
            <div className={style.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea placeholder="Enter your message"
                                  value={newMessageBody}
                                  onChange={onNewMessageChange}>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;