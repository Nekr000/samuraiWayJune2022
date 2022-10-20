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
import Friends from "./components/Friends/Friends";




function App(props:any) {

    return (<BrowserRouter>

            <div className='app-wrapper'>
                <Header/>
                <Navbar />
                <Friends state={props.state.sideBar.stateFriends}/>

                <div className='app-wrapper-content'>
                    <Routes>

                        <Route path='/profile' element={<Profile posts={props.state.profilePage}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage} />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
