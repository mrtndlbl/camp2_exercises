import React, { Component } from "react";
import "./App.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      toDoList: []
    };
  }

  handleInput = event => {
    this.setState({ value: event.target.value, check: false });
  };

  handleSubmit = event => {
    event.preventDefault();
    let newList = this.state.toDoList;
    newList.push({ value: this.state.value, check: false });
    this.setState({ toDoList: newList, value: "" });
  };

  strikeThrough = index => {
    let newToDoList = this.state.toDoList;
    if (newToDoList[index].check === false) {
      newToDoList[index] = {
        value: this.state.toDoList[index].value,
        check: true
      };
    } else {
      newToDoList[index] = {
        value: this.state.toDoList[index].value,
        check: false
      };
    }
    this.setState({ toDoList: newToDoList });
  };

  deleteTask = index => {
    let newToDoList = this.state.toDoList;
    newToDoList.splice(index, 1);
    this.setState({ toDoList: newToDoList });
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to the ultimate todo app</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Please enter your todo-list below</label>
          <div>
            <input
              type="text"
              id="task"
              value={this.state.value}
              onChange={this.handleInput}
            />
            <input type="submit" value="Submit" />
          </div>
          {this.state.toDoList.map((todo, index) => (
            <div className={"classCheck" + todo.check}>
              <input
                type="checkbox"
                checked={todo.check}
                onChange={() => this.strikeThrough(index)}
              />
              <span>{todo.value}</span>
              {todo.check ? (
                <button type="button" onClick={() => this.deleteTask(index)}>
                  Delete task
                </button>
              ) : null}
            </div>
          ))}
        </form>
      </div>
    );
  }
}

export default Todo;
