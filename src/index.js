import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import store from './redux/store';
import store from './redux/redux-store';
import StoreContext from "./redux/StoreContext";
import {Provider} from "./redux/StoreContext";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <Provider store = {store}>
            {/*<App state={state}*/}
            {/*     dispatch={store.dispatch.bind(store)}*/}
            {/*     store={store}/>*/}
            <App/>
        </Provider>,
        document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

serviceWorker.unregister();

