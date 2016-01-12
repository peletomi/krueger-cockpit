import fetch from 'isomorphic-fetch';

export const getApplicationGroups =
    () => fetch('/api/applications')
        .then(function (response) {
            if (response.status != 200) {
                throw new Error(`Error on server call! Status [${response.status}].`);
            }
            return response.json();
        });

export function fetchApplicationData({ applicationId, ip }, source) {
    return fetch(`/api/data/${applicationId}/${ip}/${source}`)
        .then(function (response) {
            if (response.status == 404) {
                return undefined;
            } else if (response.status != 200 && response.status != 404) {
                throw new Error(`Error on server call for [${application}] source [${source}]! Status [${response.status}].`);
            }
            return response.json();
        });
}