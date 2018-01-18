import React, { Component } from "react";
import "./App.css";
import { ConnectedLogin } from "./Login";
import { ConnectedChat } from "./Chat";
import { connect } from "react-redux";
import { init } from "./webSockets";

class App extends Component {
  componentDidMount(){
    init();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Slacky</h1>
        </header>

        {this.props.userName ? <ConnectedChat /> : <ConnectedLogin />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userName: state.loginReducer.userName,
    messages: state.messageReducer.messages
  };
}

export const ConnectedApp = connect(mapStateToProps)(App);
export default ConnectedApp;
