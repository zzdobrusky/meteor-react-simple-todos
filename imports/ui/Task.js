import { Meteor } from 'meteor/meteor';

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';

// Task component - represents a single todo item
export default class Task extends Component {
    toggleChecked() {
        // Set the checked property to the opposite of its current value
        Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);
    }

    deleteThisTask() {
        Meteor.call('tasks.remove', this.props.task._id);
    }

    togglePrivate() {
        Meteor.call('tasks.setPrivate', this.props.task._id, !this.props.task.private);
    }

    render() {
        // Give tasks a different className when they are checked off,
        // so that we can style them nicely in CSS
        const taskClassName = classnames({
            checked: this.props.task.checked,
            private: this.props.task.private,
        });

        return (
            <li className={taskClassName}>
                <button className="delete" onClick={this.deleteThisTask.bind(this)}>
                    &times;
                </button>
                <input
                    type="checkbox"
                    readOnly
                    checked={!!this.props.task.checked}
                    onClick={this.toggleChecked.bind(this)}
                />

                {this.props.showPrivateButton ? (
                    <button className="toggle-private" onClick={this.togglePrivate.bind(this)}>
                        {this.props.task.private ? 'Private' : 'Public'}
                    </button>
                ) : ''}

                <span className="text">
                    <strong>{this.props.task.username}</strong>: {this.props.task.text}
                </span>

                <span className="todo-details-link">
                    <a href={'todo/' + this.props.task._id} target='_blank'>Show details</a>
                </span>
            </li>
        );
    }
}

Task.propTypes = {
    task: PropTypes.shape({
        text: PropTypes.string,
        checked: PropTypes.bool,
        private: PropTypes.bool,
        showPrivateButton: PropTypes.bool
    })
};