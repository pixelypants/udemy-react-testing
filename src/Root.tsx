import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./store";

export default ({ children, initialState = {} }: any) => {
    return (
        <Provider store={createStore(reducers, initialState)}>
            {children}
        </Provider>
    )
}