const express = require("express");
const WebSocket = require("ws");
const server = require("http").createServer();
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "/views")));

let numberOfUsers = 0;

const wss = new WebSocket.Server({server});
wss.on("connection", (ws, req) => {
  numberOfUsers += 1;

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(numberOfUsers);
    }
  });

  // When a user quit, we send the information to all users
  ws.on("message", (data) => {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  })

server.on("request", app);
server.listen(3000, () => console.log(`Server listening on 3000`));
