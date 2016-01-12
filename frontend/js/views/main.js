import React from 'react';
import { connect } from 'react-redux';

import ApplicationData from './applicationData.js';
import ServerUpdates from './serverUpdates.js'

class Main extends React.Component {
    render() {
        return <div className="container-fluid">
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Krueger</a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ServerUpdates />
                        </div>
                    </div>
                </nav>
            <div><ApplicationData /></div>
        </div>;
    }
}

function select(state) {
    return {}
}

export default connect(select)(Main);