import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "./StoreContext";



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

let reRender = () => root.render(
    <BrowserRouter>
        <Provider store={store}>
        <React.StrictMode>

            <App
                // state={store.getState()}
                // dispatch={store.dispatch.bind(store)}
                // store={store}
            />

        </React.StrictMode>
    </Provider>
    </BrowserRouter>
);
reRender()

store.subscribe(reRender)