import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Tasks } from '../api/tasks';

class TaskDetails extends Component {
    render() {
        let task_output;
        if (!this.props.loading) {
            if (this.props.taskExists) {
                task_output = (
                    <div>
                        <p>text: {this.props.task.text}</p>
                        <p>owner: {this.props.task.owner}</p>
                        <p>username: {this.props.task.username}</p>
                        <p>private: {this.props.task.private && this.props.task.private.toString()}</p>
                        <p>checked: {this.props.task.checked && this.props.task.checked.toString()}</p>
                        <p>createdAt: {this.props.task.createdAt.toString()}</p>
                    </div>
                );
            } else {
                task_output = <p>Task doesn't exists!</p>;
            }
        } else {
            task_output = <p>Still loading!</p>;
        }

        return (
            <div className="container">
                <header>
                    <h1>Task details</h1>
                    <p>loading: {this.props.loading.toString()}</p>
                    <p>taskExists: {this.props.taskExists.toString()}</p>
                    <p>_id from params: {this.props.match.params.id}</p>
                    {task_output}
                </header>
            </div>
        );
    }
}

TaskDetails.propTypes = {
    loading: PropTypes.bool,
    taskExists: PropTypes.bool,
    task: PropTypes.object
};

export default withTracker((props) => {
    const taskId = props.match.params.id;
    const tasksHandle = Meteor.subscribe('tasks', taskId);
    const loading = !tasksHandle.ready();
    const task = Tasks.findOne(taskId);
    const taskExists = !loading && !!task;
    
    console.log("TodoDetails subscribed!");
    console.log("TodoDetails Tasks.find().count(): " + Tasks.find().count());
    return {
        loading,
        task,
        taskExists
    };
})(TaskDetails);

