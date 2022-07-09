import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import educationReducer from './educationShowcase/educationActions';

const reducer = combineReducers({
    educationReducer,
});

// creating a store
const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
