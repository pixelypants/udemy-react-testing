import { Action } from "redux";
import axios from "axios";
import { action, createAction, createAsyncAction } from 'typesafe-actions';

export const SAVE_COMMENT = 'comments/SAVE_COMMENT';
export const FETCH_COMMENT = 'comments/FETCH_COMMENT';
export const FETCH_COMMENT_SUCCESS = 'comments/FETCH_COMMENT_SUCCESS';
export const FETCH_COMMENT_FAIL = 'comments/FETCH_COMMENT_FAIL';
export const DEFAULT_COMMENT = 'comments/DEFAULT_COMMENT';

export const SaveComment = createAction(SAVE_COMMENT, resolve => {
    return (comment: string) => resolve(comment);
});
export const FetchComments = createAction(FETCH_COMMENT, resolve => {
    return () => resolve();
})
export const FetchCommentSuccess = createAction(FETCH_COMMENT_SUCCESS, resolve => {
    return (comments: string[]) => resolve(comments);
});
export const FetchCommentFail = createAction(FETCH_COMMENT_FAIL, resolve => {
    return (error: string) => resolve(error);
});
export const DefaultComment = createAction(DEFAULT_COMMENT, resolve => {
    return () => resolve();
});
