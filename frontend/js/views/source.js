import React from 'react';
import { connect } from 'react-redux';

import * as a from './../actions';

class Source extends React.Component {
    render() {
        const { source } = this.props;
        if (source) {
            const applicationData = source.applicationData;
            if (applicationData.length > 0) {
                const data = applicationData[0].data;
                const rows = [];
                for (let name in data) {
                    rows.push(<tr key={name}><td>{name}</td><td>{data[name]}</td></tr>);
                }
                return <table className="table table-striped table-condensed">
                    <thead>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            }
        }
        return <div></div>;
    }
}

function select(state) {
    if (state.openedSource) {
        const { application, source} = state.openedSource;
        const { applicationId, ip } = application;
        if (state.applicationData.hasIn([applicationId, ip, source])) {
            return {
                source: state.applicationData.getIn([applicationId, ip, source])
            }
        }
    }
    return null;
}

export default connect(select)(Source);