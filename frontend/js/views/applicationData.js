import React from 'react';
import { connect } from 'react-redux';

import Applications from './applications.js'
import ApplicationGroupList from './applicationGroupList.js';
import Source from './source.js'
import * as a from './../actions.js';

class ApplicationData extends React.Component {
    render() {
        const { openedApplicationGroup, openedSource } = this.props;

        if (openedApplicationGroup && openedSource) {
            return <div className="row">
                <div className="col-md-1">
                    <ApplicationGroupList />
                </div>
                <div className="col-md-4">
                    <Applications />
                </div>
                <div className="col-md-6">
                    <Source />
                </div>
            </div>;
        } else if (openedApplicationGroup) {
            return <div className="row">
                <div className="col-md-1">
                    <ApplicationGroupList />
                </div>
                <div className="col-md-4">
                    <Applications />
                </div>
            </div>;
        } else {
            return <div className="row">
                <div className="col-md-1">
                    <ApplicationGroupList />
                </div>
            </div>;
        }
    }
}

function select(state) {
    return {
        openedApplicationGroup: state.openedApplicationGroup,
        openedSource: state.openedSource
    };
}

export default connect(select)(ApplicationData);