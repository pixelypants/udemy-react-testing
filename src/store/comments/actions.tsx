import { Action } from "redux";
import { action, createAction } from 'typesafe-actions';

export const SAVE_COMMENT = 'comments/SAVE_COMMENT';
export const REMOVE_COMMENT = 'comments/REMOVE_COMMENT';
export const DEFAULT_COMMENT = 'comments/DEFAULT_COMMENT';

export const SaveComment = createAction(SAVE_COMMENT, resolve => {
    return (comment: string) => resolve(comment);
});

export const RemoveComment = createAction(REMOVE_COMMENT, resolve => {
    return (comment: string) => resolve(comment);
});

export const DefaultComment = createAction(DEFAULT_COMMENT, resolve => {
    return () => resolve();
});