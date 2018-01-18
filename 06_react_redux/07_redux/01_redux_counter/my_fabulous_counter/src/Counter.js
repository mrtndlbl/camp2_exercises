import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";

class Counter extends Component {

  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Counter Pro Evolution</h1>
        </header>
        <p className="App-intro">
          <button onClick={this.increment}>+</button>
          <h1 className="counter_display">{this.props.value}</h1>
          <button onClick={this.decrement}>-</button>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { value: state.value }
}

const ConnectedApp = connect(mapStateToProps)(Counter);

export default ConnectedApp;
