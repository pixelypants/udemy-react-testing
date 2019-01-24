import { Action } from "redux";
import { action, createAction } from 'typesafe-actions';

const SAVE_COMMENT = 'comments/SAVE_COMMENT';
const REMOVE_COMMENT = 'comments/REMOVE_COMMENT';

export const SaveComment = createAction(SAVE_COMMENT, resolve => {
    return (comment: string) => resolve(comment);
});

export const RemoveComment = createAction(REMOVE_COMMENT, resolve => {
    return (comment: string) => resolve(comment);
});
