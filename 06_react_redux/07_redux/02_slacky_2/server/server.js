const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const server = require("http").createServer();
const app = express();

// This will store the messages for the time of the session
const messages = [];

// Launch the Websocket server
const wss = new WebSocket.Server({ server });

wss.on("connection", function connection(ws, req) {
  ws.on("message", function incoming(data) {
    const message = JSON.parse(data);
    switch (message.type) {
      case "LOGIN":
        wss.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ type: "MESSAGES", data: messages}));
          }
        });
        return;
      case "NEW_MESSAGE":
        // Add the message to the list of messages
        messages.push({ userName: message.userName, message: message.message });
console.log(messages);
        // Sends all messages to all connected clients
        wss.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ type: "MESSAGES", data: messages}));
          }
        });
        return;
    }
  });

  // Display an error when one occurs
  // The most likely candidate is when a browser closes without closing
  // the connection properly
  ws.on("error", console.warn);
});


server.on("request", app);
server.listen(8080, function listening() {
  console.log("Listening on ", server.address().port);
});
