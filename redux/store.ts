import {createStore, combineReducers} from "redux";
import applicationReducer from "./reducers";

const rootReducer = combineReducers({
    application: applicationReducer,
});

export const store = createStore(rootReducer);