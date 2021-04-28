const WebSocket = require('ws');
const { setupWSConnection } = require("./utils")

const wss = new WebSocket.Server({
    port: 8082,
    path: "/demo"
});

wss.on("listening", () => console.log(`listening on 8082`));

wss.on("connection", setupWSConnection);