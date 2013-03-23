var sys = require("sys")
  , fs = require("fs")
  , path = require("path")
  , http = require("http")
  , ws = require('../node-v0.1.101/lib/ws');
  
var port = 1740;

/*-----------------------------------------------
  logging:
-----------------------------------------------*/
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

function timestamp() {
  var d = new Date();
  return [
    d.getDate(),
    months[d.getMonth()],
    [ pad(d.getHours())
    , pad(d.getMinutes())
    , pad(d.getSeconds())
    , (d.getTime() + "").substr( - 4, 4)
    ].join(':')
  ].join(' ');
};

function log(msg) {
  sys.puts(timestamp() + ' - ' + msg.toString());
};

/*-----------------------------------------------
  Spin up our server:
-----------------------------------------------*/
var httpServer = http.createServer();
var presentorId;
var totalConnections = 0;

var server = ws.createServer({
  debug: true
}, httpServer);

server.addListener("listening", function(){
  log("Started! Listening for connections on port " + port + "...");
});

// Handle WebSocket Requests
server.addListener("connection", function(conn){
    log("opened connection: "+conn.id);
    totalConnections++;
  
    if (!presentorId) {
        presentorId = conn.id;
    }
  
    server.send(conn.id, "Connected as: "+conn.id);
    server.send(presentorId, "New connection (total of: " + totalConnections + ")");
  
    conn.addListener("message", function(message){
        log("<"+conn.id+"> " + message);
        conn.broadcast(message);
    });
});

server.addListener("close", function(conn){
    log("closed connection: "+conn.id);
    
    if (conn.id == presentorId) {
        conn.broadcast("Presentor disconnected...");
    }

    totalConnections--;    
    server.send(presentorId, "Connection closed (total of: " + totalConnections + ")");

});

server.listen(port);
// Handle HTTP Requests:

// This will hijack the http server, if the httpserver doesn't 
// already respond to http.Server#request

// server.addListener("request", serveFile);
