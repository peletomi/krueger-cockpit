import React from 'react';
import { connect } from 'react-redux';

import * as a from '../actions';

class ServerUpdates extends React.Component {
    render() {
        const { dispatch, fetchUpdates } = this.props;
        const buttonIconClass = fetchUpdates ? "fa fa-pause" : "fa fa-play";
        return <ul className="nav navbar-nav navbar-right">
            <li title="Start/Stop server updates"><a href="#" onClick={e => dispatch(a.toggleServerUpdate())}><i className={buttonIconClass}> </i></a></li>
        </ul>;
    }
}

function select(state) {
    return {
        fetchUpdates: state.serverUpdates.fetchUpdates
    };
}

export default connect(select)(ServerUpdates);