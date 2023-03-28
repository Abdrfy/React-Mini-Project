import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import allReducers from '../reducers';
import { watcherSaga } from './sagas/rootsaga';

const sagaMiddleWare = createSagaMiddleware()
const middleWare = [sagaMiddleWare]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    allReducers, 
    {}, 
    composeEnhancers(applyMiddleware(...middleWare))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
sagaMiddleWare.run(watcherSaga)

export default store
