import React from 'react';
import { connect } from 'react-redux';

import * as a from './../actions';

class Sources extends React.Component {

    render() {
        const { dispatch, application, sources } = this.props;
        if (sources && sources.size > 0) {
            const sourcesView =
                sources.keySeq().toArray().filter(source => source !== "metrics").map(
                    source => <span key={source}><button className="btn btn-xs" onClick={e => dispatch(a.clickSource({ application, source }))}>{source}</button> </span>);
            return <span>{sourcesView}</span>
        } else {
            return <span></span>;
        }
    }
}

function select(state) {
    return {}
}

export default connect(select)(Sources);