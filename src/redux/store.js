// import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import { createStore } from 'redux'
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
// const store = configureStore({ reducer: rootReducer })

export const persistor = persistStore(store);

export default store;