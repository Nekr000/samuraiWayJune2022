import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Dialogs from './components/Dialogs/Dialogs';
import {Routes, Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import FriendsOn from "./components/Friends/Friends";
import FriendsFull from "./components/Friends/FriendsFull/FriendsFull";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SuperDialogsContainter from "./components/Dialogs/DialogsContainer";
import FriendsOnCOntainer from "./components/Friends/FriendsContainer";
import FriendsFullContainer from "./components/Friends/FriendsFull/FriendsFullContainer";


function App(props: any) {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <FriendsOnCOntainer />

            <div className='app-wrapper-content'>
                <Routes>

                    <Route path='/profile' element={<Profile />}/>
                    <Route path="/dialogs/*" element={<DialogsContainer />}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/friendsFull' element={<FriendsFullContainer />}/>
                </Routes>
            </div>
        </div>

    );
}


export default App;
