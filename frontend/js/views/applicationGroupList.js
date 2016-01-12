import React from 'react';
import { connect } from 'react-redux';

import Applications from './applications.js'
import Source from './source.js'
import * as a from './../actions.js';

function applicationGroupItem(applicationGroup, openedApplicationGroup, dispatch) {
    const opened = openedApplicationGroup == applicationGroup.applicationId;
    const itemClass = opened ? "list-group-item active" : "list-group-item";
    const applicationCount = applicationGroup.applications.length;

    return <a key={applicationGroup.applicationId} href="#" className={itemClass} onClick={e => dispatch(a.clickApplicationGroup(applicationGroup.applicationId))}>
        {applicationGroup.applicationId} <span className="badge">{applicationCount}</span>
    </a>;
}

class ApplicationGroupList extends React.Component {
    render() {
        const { dispatch, applicationGroups, openedApplicationGroup } = this.props;
        const items = applicationGroups.map(applicationGroup => applicationGroupItem(applicationGroup, openedApplicationGroup, dispatch));
        return <div>
            <h4>Applications</h4>
            <div className="list-group">
                {items}
            </div>
        </div>
    }
}

function select(state) {
    return {
        applicationGroups: state.applicationGroups,
        openedApplicationGroup: state.openedApplicationGroup
    };
}

export default connect(select)(ApplicationGroupList);