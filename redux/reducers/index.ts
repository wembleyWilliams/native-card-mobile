import {ApplicationState} from "../../common/types";
import {combineReducers} from "redux";
import {applicationReducer} from './applicationReducer'


export interface State {
    application: ApplicationState
}

export const rootReducer = combineReducers({
    application: applicationReducer,
});

