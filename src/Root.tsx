import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import reducers, { rootEpic } from "./store";
import * as api from "./services";

export default ({ children, initialState = {} }: any) => {
    const epicMiddleware = createEpicMiddleware({
        dependencies: { api: api }
    });

    const store = createStore(reducers, initialState, applyMiddleware(epicMiddleware));
    epicMiddleware.run(rootEpic);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

// https://redux-observable.js.org/docs/recipes/InjectingDependenciesIntoEpics.html