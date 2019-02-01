import { ActionType, getType, StateType } from 'typesafe-actions';
import { CommentsState } from "./initialState";

import * as comments from './actions';
export type CommentActions = ActionType<typeof comments>;

export const initState: CommentsState = {
    isMocked: false,
    comments: []
}

export const commentReducer = (state = initState, action: CommentActions) => {
    switch (action.type) {
        case getType(comments.SaveComment):
            return Object.assign({}, state, {
                comments: [...state.comments, action.payload]
            })
        case getType(comments.FetchCommentSuccess):
            return Object.assign({}, state, {
                comments: [...state.comments, ...action.payload]
            })
        default:
            return state;
    }
}
export type CommentsState = StateType<typeof commentReducer>;