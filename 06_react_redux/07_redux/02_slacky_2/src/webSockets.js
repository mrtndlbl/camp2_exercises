import store from "./index";

// Attaching the websocket to our App so we can reuse it
let websocket;

function init() {
  websocket = new WebSocket(`ws://${window.location.hostname}:8080`);

  websocket.addEventListener("message", event => {
    const message = JSON.parse(event.data);
    console.log("Message from server ", message);
    switch (message.type) {
      case "MESSAGES":
        store.dispatch({
          type: "GET_MESSAGES",
          messages: message.data
        });
        break;
      default:
        break;
    }
  });
}

function connectWebsocket() {
  websocket.send(
    JSON.stringify({
      type: "LOGIN",
      userName: store.getState().userName
    })
  );
}

function sendMessageToWS(author, message) {
  websocket.send(
    JSON.stringify({
      type: "NEW_MESSAGE",
      userName: author,
      message: message
    })
  );
}

export { init, connectWebsocket, sendMessageToWS };
