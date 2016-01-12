import { createAction } from 'redux-actions';

import * as api from './api'

export const ERROR_OCCURRED = "ERROR_OCCURRED"; // FIXME -> api catch
export const TOGGLE_SERVER_UPDATE = "TOGGLE_SERVER_UPDATE";
export const TRIGGER_SERVER_UPDATE = "TRIGGER_SERVER_UPDATE";
export const UPDATE_APPLICATION_GROUP = "UPDATE_APPLICATION_GROUP";
export const CLICK_APPLICATION_GROUP = "CLICK_APPLICATION_GROUP";
export const UPDATE_APPLICATION_DATA = "UPDATE_APPLICATION_DATA";
export const CLICK_SOURCE = "CLICK_SOURCE";

export const toggleServerUpdate = createAction(TOGGLE_SERVER_UPDATE);
export const triggerServerUpdate = createAction(TRIGGER_SERVER_UPDATE);
export const updateApplicationGroup = createAction(UPDATE_APPLICATION_GROUP);
export const updateApplicationData = createAction(UPDATE_APPLICATION_DATA);

export function fetchApplicationGroup() {
    return dispatch => {
        // dispatch fetch started

        api.getApplicationGroups().then(json => dispatch(updateApplicationGroup(json)))
            .catch(err => console.error(err)); // FIXME add error display
    }
}

export const clickApplicationGroup = createAction(CLICK_APPLICATION_GROUP);
export const clickSource = createAction(CLICK_SOURCE);

export function fetchApplicationData(application, source) {
    return dispatch => {
        // dispatch fetch started

        const payload = {application: application, source: source};
        api.fetchApplicationData(application, source).then(json => {
                if (json != undefined ) {
                    dispatch(updateApplicationData(Object.assign(payload, {applicationData: json})));
                }
            })
            .catch(err => console.error(err)); // FIXME add error display
    }
}
