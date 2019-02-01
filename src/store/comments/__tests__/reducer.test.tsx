import { ActionType, getType, StateType } from 'typesafe-actions';
import { initState } from "../reducer";

import { commentReducer } from "../reducer";
import { SAVE_COMMENT, DEFAULT_COMMENT } from "../actions";

import * as comments from '../actions';
export type CommentActions = ActionType<typeof comments>;

it('handle actions of type SAVE_COMMENT', () => {
    const comment = "New Comment"
    const action: CommentActions = {
        type: SAVE_COMMENT,
        payload: comment
    }
    const newState = commentReducer(initState, action);
    expect(newState.comments).toEqual([comment]);
})

it('handles action with unknown type', () => {
    const action: CommentActions = {
        type: DEFAULT_COMMENT
    }
    const newState = commentReducer(initState, action);
    expect(newState.comments).toEqual([]);
})