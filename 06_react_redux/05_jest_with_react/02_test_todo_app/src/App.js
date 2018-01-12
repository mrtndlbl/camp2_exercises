import React, { Component } from "react";

let lastId = 1;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
      tasks: []
    };

    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.handleNewTask = this.handleNewTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  addTask(event) {
    event.preventDefault();
    const newTask = {
      id: lastId,
      label: this.state.newTask,
      completed: false
    };
    lastId++;
    this.setState({
      tasks: [...this.state.tasks, newTask],
      newTask: ""
    });
  }

  deleteTask(taskId) {
    const newTasks = this.state.tasks.filter(task => task.id !== taskId);
    console.log(newTasks)
    this.setState({tasks: newTasks});
  }

  handleNewTask(event) {
    this.setState({
      newTask: event.target.value
    });
  }

  updateTask(taskId) {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === taskId) {
        task.completed = !task.completed;
      }
      return task;
    });
    this.setState({tasks: newTasks});
  }

  render() {
    return (
      <div className="Todo">
        <div className="new-todo">
          <form onSubmit={this.addTask}>
            <input type="text" value={this.state.newTask} onChange={this.handleNewTask} />
            <button type="submit">Add</button>
          </form>
        </div>
        <ul className="todos">
          {this.state.tasks.map(task =>
            <li key={task.id} className={task.completed ? "completed" : "task"}>
              <span>{task.label}</span>
              <input
                type="checkbox"
                value={task.completed}
                onChange={() => this.updateTask(task.id)}
              />
              { task.completed
                ? <input className="deleteButton" type="button" onClick={() => this.deleteTask(task.id)} value="delete" />
                : null
              }
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default App;
