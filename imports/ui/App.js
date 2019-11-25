import React, { Component } from 'react';

import TitleBar from './TitleBar';
import PlayerList from './PlayerList';
import AddPlayer from './AddPlayer';

export default class App extends Component {
    render() {
        return (
            <div>
                <TitleBar title={this.props.title} subtitle="Created by Josef Chen"/>
                <div className="wrapper">
                    <PlayerList players={this.props.players}/>
                    <AddPlayer/>    
                </div>

            </div>
        )
    }
}

App.propTypes = {
    title: React.PropTypes.string.isRequired,
    players: React.PropTypes.array.isRequired
}