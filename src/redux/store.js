import { applyMiddleware } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux'
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));


export default store;