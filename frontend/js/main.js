import 'babel/polyfill';

import Immutable from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import createLogger from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import * as a from './actions.js';
import * as reducers from './reducers.js';
import Main from './views/main.js';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    createLogger()
)(createStore);
const kruegerApp = combineReducers(reducers);
const store = createStoreWithMiddleware(kruegerApp);

const sources = [ "env", "health", "properties", "metrics" ]; // TODO "metric/statusCodes" - handle not existing sources

function fetchUpdatesFromBackend() {
    const state = store.getState();
    if (state.serverUpdates.fetchUpdates) { // state.serverUpdates is set from the reduces.js file
        store.dispatch(a.triggerServerUpdate());
        store.dispatch(a.fetchApplicationGroup());
        state.applicationGroups.forEach(applicationGroup => {
            applicationGroup.applications.forEach(application => {
                sources.forEach(source => store.dispatch(a.fetchApplicationData(application, source)));
            })
        });
    }
    setTimeout(fetchUpdatesFromBackend, state.serverUpdates.updateFrequency);
}

export function main() {
    fetchUpdatesFromBackend();

    ReactDOM.render(
        <Provider store={store}>
            <Main />
        </Provider>, document.getElementById('app'));
}