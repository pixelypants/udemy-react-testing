import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import reducers, { rootEpic } from "./store";

export default ({ children, initialState = {} }: any) => {
    const epicMiddleware = createEpicMiddleware();

    const store = createStore(reducers, initialState, applyMiddleware(epicMiddleware));
    epicMiddleware.run(rootEpic);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}