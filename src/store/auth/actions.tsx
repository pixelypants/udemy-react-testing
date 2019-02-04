import { action, createAction, createAsyncAction } from 'typesafe-actions';

export const CHANGE_AUTH = 'auth/CHANGE_AUTH';

export const changeAuth = createAction(CHANGE_AUTH, resolve => {
    return (isLoggedIn: boolean) => resolve(isLoggedIn);
});