# Real time collaborative document demo
This demo makes use of TipTap editor based on ProseMirror and Yjs along with websockets to achieve collaborative documents.

Document state is persisted in a dynamoDb table.

To run:

1. `docker compose up` will start localstack with dynamodb
2. `npm i` and `npm run start` in the server directory will start the websocket server
3. `npm i` and `npm run start` in the editor directory will start the frontend dev server

Visit `http://localhost:8081` to test the editor. The contents of the editor will be synced between different browsers and tabs. The state will also be saved should any tabs be closed and reopened at a later time.