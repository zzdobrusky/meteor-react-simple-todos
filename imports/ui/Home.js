import React, { Component } from 'react';

import Clock from './Clock';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <header>
                    <h1>Welcome to my portfolio website</h1>
                    <p> Feel free to browse around and learn more about me.</p>
                    <Clock color="blue" />
                    <Clock color="red" />
                </header>
            </div>
        )
    }
}

export default Home;