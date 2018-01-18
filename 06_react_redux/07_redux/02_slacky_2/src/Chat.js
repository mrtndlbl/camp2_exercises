import React, { Component } from "react";
import { connect } from "react-redux";
import {sendMessageToWS} from './webSockets'

class Chat extends Component {
  componentDidUpdate() {
    // https://reactjs.org/docs/react-component.html#componentdidupdate
    // This will make the list of messages scroll to the bottom each time
    // the component update, that way, the last message will always be visible
    this.messageListDiv.scrollTop = this.messageListDiv.scrollHeight;
  }

  render() {
    console.log(this.props);
    return (
      <div className="Chat">
        <div
          className="Chat-messages"
          ref={node => {
            // refs allows you to have a reference to an element of the DOM
            // You should use this parcimoniously and don't change the DOM or React
            // will go crazy
            // See https://reactjs.org/docs/refs-and-the-dom.html
            this.messageListDiv = node;
          }}
        >
          {this.props.messageList.map((message, index) => (
            <div className="message-container" key={index}>
              <span className="author">{message.userName}</span>
              <span className="message">{message.message}</span>
            </div>
          ))}
        </div>
        <div className="Chat-form">
          <form onSubmit={(event) => this.props.handleSubmit(event, this.props.author, this.props.temporaryMessage)}>
            <input
              type="text"
              value={this.props.temporaryMessage}
              onChange={this.props.handleChange}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    author: state.loginReducer.userName,
    messageList: state.messageReducer.messageList,
    temporaryMessage: state.messageReducer.temporaryMessage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleChange: event =>
      dispatch({
        type: "INCOMING_MESSAGE",
        temporaryMessage: event.target.value
      }),
    handleSubmit: (event, author, message) => {
      event.preventDefault();
      sendMessageToWS(author, message);
      dispatch({ type: "SEND_MESSAGE", author: author });
    }
  };
}

export const ConnectedChat = connect(mapStateToProps, mapDispatchToProps)(Chat);
