import {AppRegistry} from 'react-native';
import React, { Component } from 'react';

import {name as appName} from './app.json';
//  import {createStore,applyMiddleware} from 'redux';
// import {Provider} from 'react-redux';
//
// import allReducers from './src4/reducers';
// import MovieContainer from './src4/containers/MovieContainer';
// //
//
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './src4/sagas/rootSaga';
// const sagaMiddleware = createSagaMiddleware();
//
// let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
// const App = () => (
//   <Provider store={store}>
//     <MovieContainer />
//   </Provider>
// );
import App from './src5/App';
// sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent(appName, () => App);
