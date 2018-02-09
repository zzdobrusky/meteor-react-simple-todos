import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import Home from './Home';
import TaskList from './TaskList';
import TaskDetails from './TaskDetails';
import About from './About';
import Game from './Game';
import { Contact } from './Contact';

import AccountsUIWrapper from './AccountsUIWrapper';

// single page app
class App extends Component {
    render() {
        return (
            <div className='app'>
                <div>                    
                    <span style={{float: 'left'}}><AccountsUIWrapper/></span>
                    <h1 style={{float: 'right'}}>Meteor with React Router Demo</h1>
                </div>
                <div style={{clear: 'both'}}></div>
                <Navigation />
                <Main />
            </div>
        )
    }
}

// routing
const Main = () => (
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/todo' component={TaskList}></Route>
        <Route exact path="/todo/:id" component={TaskDetails}></Route>
        <Route exact path="/game" component={Game}></Route>
        <Route exact path='/contact' component={Contact}></Route>
    </Switch>
);

// navigation
const Navigation = () => (
    <nav>
        <ul>
            <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
            <li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
            <li><NavLink exact activeClassName="current" to='/todo'>Todo List</NavLink></li>
            <li><NavLink exact activeClassName="current" to='/game'>TickTackToe</NavLink></li>
            <li><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li>
        </ul>
    </nav>
);

export default App;