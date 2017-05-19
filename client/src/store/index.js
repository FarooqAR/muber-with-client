import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";

import DriversReducer from './reducers/drivers_reducer';

const middleware = applyMiddleware(thunk);

const rootReducer = combineReducers({
    drivers: DriversReducer
});

const store = createStore(
    rootReducer,
    middleware
);

export default store