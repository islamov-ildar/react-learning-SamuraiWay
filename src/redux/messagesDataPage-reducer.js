const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
};

const messageDataPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messagesData.push({id: "6", message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


export default messageDataPageReducer;