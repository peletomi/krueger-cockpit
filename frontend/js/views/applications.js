import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';

import Sources from './sources.js';
import * as a from './../actions';

class Applications extends React.Component {

    getSources(application, applicationData) {
        return applicationData.get(application.ip, Immutable.Map());
    }

    render() {
        const { dispatch, applications, applicationData } = this.props;
        const applicationRows = applications.map(application =>
            <li className="list-group-item" key={application}>
                {application.ip} <Sources application={application} sources={this.getSources(application, applicationData)} />
            </li>);

        return <div>
            <h4>Product availability</h4>
            <p>
                <a href="#"><i className="fa fa-code-fork"></i> scm </a>
                <a href="#"><i className="fa fa-area-chart"></i> metrics </a>
                <a href="#"><i className="fa fa-info-circle"></i> swagger </a>
            </p>
            <ul className="list-group">
                {applicationRows}
            </ul>
        </div>;
    }
}

function select(state) {
    let applications = [];
    let applicationData = Immutable.Map();

    if (state.openedApplicationGroup) {
        state.applicationGroups.forEach(applicationGroup => {
            if (state.openedApplicationGroup == applicationGroup.applicationId) {
                applications = applicationGroup.applications;
            }
        });
        if (state.applicationData.has(state.openedApplicationGroup)) {
            applicationData = state.applicationData.get(state.openedApplicationGroup);
        }
    }
    return {
        applications: applications,
        applicationData: applicationData
    };
}

export default connect(select)(Applications);