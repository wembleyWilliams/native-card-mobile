import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const composeWithReduxDevtools = composeWithDevTools(
    applyMiddleware(thunk)
);

export const store = createStore(
    rootReducer,
    composeWithReduxDevtools
);