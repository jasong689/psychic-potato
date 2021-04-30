import WebSocket from 'ws';
import { setupWSConnection } from "./utils.js";

const wss = new WebSocket.Server({
    port: 8082,
    path: "/demo"
});

wss.on("listening", () => console.log(`listening on 8082`));

wss.on("connection", setupWSConnection);