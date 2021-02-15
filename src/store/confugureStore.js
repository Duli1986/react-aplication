import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers";
import {composeWithDevTools} from "redux-devtools-extension/logOnlyInProduction";
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { createPromise } from 'redux-promise-middleware'

const initialState = {};

export default  createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(createPromise(), thunk, createLogger())));

