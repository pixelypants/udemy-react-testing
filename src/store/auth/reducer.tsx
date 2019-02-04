import { ActionType, getType, StateType } from 'typesafe-actions';
import { AuthState } from "./initialState";

import * as auth from './actions';
export type AuthActions = ActionType<typeof auth>;

export const initState: AuthState = {
    isLoggedIn: false,
}

export const authReducer = (state = initState, action: AuthActions) => {
    switch (action.type) {
        case getType(auth.changeAuth):
            return Object.assign({}, state, {
                isLoggedIn: action.payload
            })
        default:
            return state;
    }
}
export type AuthState = StateType<typeof authReducer>;