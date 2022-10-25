import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewPostText} from "./redux/state";



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
export let reRender = (state:any) => root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}/>
      </React.StrictMode>
    </BrowserRouter>
);


reportWebVitals();
