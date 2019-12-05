// ### Count Rules

// - balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
// - balls and strikes reset to 0 when a `hit` is recorded.
// - a `foul` increases strikes up to 2. With no strikes, 
// a foul makes it 1 strike. With 1 strike, 
// a foul makes it 2 strikes. 
// With two strikes a foul has no effect, count stays at 2 strikes.

import React, { Component } from 'react';
import Display from './display';

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.plusStrike}>strike</button>
                <button onClick={this.props.plusStrike}>strike</button>
                <button onClick={this.props.plusStrike}>strike</button>
                <button onClick={this.props.plusStrike}>strike</button>
            </div>
        )
    }
}

export default Dashboard;