import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import allReducers from '../reducers';
import { watcherSaga } from './sagas/rootsaga';
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleWare = createSagaMiddleware()
const middleWare = [sagaMiddleWare]

const store = createStore(
    allReducers, 
    {}, 
    composeWithDevTools(applyMiddleware(...middleWare))
)
sagaMiddleWare.run(watcherSaga)

export default store
