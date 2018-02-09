import React, { Component } from 'react';
import PropTypes from 'prop-types';


function colorDiv(color) {
    // return CSS formatting in JSON format
    return { color: color }
}

function FormattedDate(props) {
    return <h2>It is <span style={colorDiv(props.color)}>{props.date.toLocaleTimeString()}</span>.</h2>;
}

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currDate: new Date(),
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState((prevState, props) => {
            return { currDate: new Date() }
        });
    }

    render() {
        return (
            <FormattedDate date={this.state.currDate} color={this.props.color} />
        );
    }
}

Clock.propTypes = {
    color: PropTypes.string
};

export default Clock;