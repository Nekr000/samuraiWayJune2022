import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Dialogs from './components/Dialogs/Dialogs';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import FriendsOn from "./components/Friends/Friends";
import FriendsFull from "./components/Friends/FriendsFull/FriendsFull";


function App(props: any) {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <FriendsOn state={props.state.sideBar.stateFriends}/>

            <div className='app-wrapper-content'>
                <Routes>

                    <Route path='/profile' element={<Profile posts={props.state.profilePage}/>}/>
                    <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/friendsFull' element={<FriendsFull state={props.state.sideBar.stateFriends}/>}/>
                </Routes>
            </div>
        </div>

    );
}


export default App;
