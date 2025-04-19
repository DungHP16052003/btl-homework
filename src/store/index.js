import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "@/reducers/auth";
import { thunk } from "redux-thunk";
import logger from "redux-logger";


const initState = {};

const rootStore = combineReducers({
    auth: authReducer,
})
const store = legacy_createStore(rootStore, initState, applyMiddleware(thunk, logger));

window.store = store
export default store