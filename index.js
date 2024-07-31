const WebSocket = require("ws");
const uuid = require("uuid");

const wss = new WebSocket.Server({port: 19131});

console.info("WebSocket is Ready. Type \"/connect localhost:19131\"");

wss.on("connection", ws => {
    console.log("Connected");

    ws.on("message", rawData => {
        const data = JSON.parse(rawData);
        console.log(JSON.stringify(data));
    });
});

