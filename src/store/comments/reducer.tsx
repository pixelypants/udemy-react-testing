import { ActionType, getType, StateType } from 'typesafe-actions';

import * as comments from './actions';
export type CommentActions = ActionType<typeof comments>;

export const commentReducer = (state: string[] = [], action: CommentActions) => {
    switch (action.type) {
        case getType(comments.FetchCommentSuccess):
            return [...state, ...action.payload]
        default:
            return state;
    }
}
export type CommentsState = StateType<typeof commentReducer>;