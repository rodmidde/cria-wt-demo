Prerequisites:
- Node.js & npm (http://nodejs.org/download/)
- mongodb (http://www.mongodb.org/downloads)
- Node modules:
    * mongoose (npm install mongoose)
    * connect (npm install connect)
    * socket.io (npm install socket.io)

Run Server:
- Start Mongo Daemon (e.g. mongod --dbpath data &)
- Start one of the servers: node <servername>.js
    * Server.js:
    * SimpleServer.js has the same functionality, but all in one file instead of the OO version in Server.js
    * SimpleReturningServer.js uses a return value to the client-websocket call instead of putting a seperate
    message with corresponding data

- Visit localhost:8000 in your browser