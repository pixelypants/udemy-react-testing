import { ActionType, getType, StateType } from 'typesafe-actions';

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
    const newState = commentReducer([], action);
    expect(newState).toEqual([comment]);
})

it('handles action with unknown type', () => {
    const action: CommentActions = {
        type: DEFAULT_COMMENT
    }
    const newState = commentReducer([], action);
    expect(newState).toEqual([]);
})