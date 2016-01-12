import Immutable from 'immutable';

import * as a from './actions.js';

function updateState(state, stateToMerge) {
    return Object.assign({}, state, stateToMerge);
}

export function applicationGroups(state = [], action) {
    switch (action.type) {
        case a.UPDATE_APPLICATION_GROUP: return action.payload;
        default: return state;
    }
}

export function openedApplicationGroup(state = null, action) {
    switch (action.type) {
        case a.CLICK_APPLICATION_GROUP: return action.payload === state ? null : action.payload;
        default: return state;
    }
}

export function serverUpdates(state = { fetchUpdates: true, updateFrequency: 2000 }, action) {
    switch (action.type) {
        case a.TRIGGER_SERVER_UPDATE: return state;
        case a.TOGGLE_SERVER_UPDATE: return updateState(state, { fetchUpdates: !state.fetchUpdates });
        default: return state;
    }
}

export function applicationData(state = Immutable.Map(), action) { // TODO don't update ip timestamp of response id not newer
    switch (action.type) {
        case a.UPDATE_APPLICATION_DATA: {
            const { application, source, applicationData } = action.payload;
            const {applicationId, ip} = application;
            return state.setIn([applicationId, ip, source], applicationData);
        }
        default: return state;
    }
}

export function openedSource(state = null, action) {
    switch (action.type) {
        case a.CLICK_SOURCE: return action.payload; // FIXME reset openedSources if openedApplicationGroup changes
        default: return state;
    }
}