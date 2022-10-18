import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let posts = [
    {id: 1, message: 'Hello World', likesCount: 15},
    {id: 2, message: 'my second post', likesCount: 11},
    {id: 3, message: 'Hello fantasy', likesCount: 0},
    {id: 4, message: 'TSX', likesCount: 2022},
]
let dialogs = [
    {id: 1, name: 'Lex'},
    {id: 2, name: 'Petya'},
    {id: 3, name: 'Grisha'},
    {id: 4, name: 'Gosha'},
    {id: 5, name: 'Masha'},
]
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Yo'},
    {id: 3, message: 'Hello'},
    {id: 3, message: 'number 27'},
]


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
