import { combineReducers } from "redux";
import { commentReducer } from "./comments/reducer";
import { combineEpics } from 'redux-observable';
import { fetchCommentsEpic } from "./comments/epics";

export const rootEpic = combineEpics(fetchCommentsEpic);

export default combineReducers({
    comments: commentReducer
})