import React, { Component } from "react";
import { connect } from "react-redux";
import { connectWebsocket } from "./webSockets";

class Login extends Component {
  render() {
    return (
      <form className="Login" onSubmit={this.props.handleSubmit}>
        <div>Please choose a login name</div>
        <input
          type="text"
          onChange={this.props.handleChange}
          value={this.props.temporaryUserName}
        />
        <button type="submit">Log in</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    temporaryUserName: state.loginReducer.temporaryUserName
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleChange: event =>
      dispatch({
        type: "UPDATE_USERNAME",
        temporaryUserName: event.target.value
      }),
    handleSubmit: event => {
      event.preventDefault();
      dispatch({ type: "LOGIN" });
      connectWebsocket();
    }
  };
}

export const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(
  Login
);
