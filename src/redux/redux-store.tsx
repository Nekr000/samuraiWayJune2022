import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer.tsx";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sideBar:sidebarReducer
})


// @ts-ignore for study
let store = createStore(reducers);


export default store