/**
 * User: mdkr
 * Date: 3/23/13
 */

function Server() {
    var self = this;
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/simplemvc');
    var SoccerPlayer = mongoose.model('SoccerPlayer', { name: String, club: String, playerNumber: Number, isSuspended: Boolean });


    /**
     * Starts a static http connection on port 8000 and a websocket server on 1337
     */
    this.start = function () {
        // Socket.io is used for handling dynamic requests (JSON)
        var connect = require("connect"),
            io = require("socket.io").listen(1337);

        // Create a http server that serves static data from ../client
        var http = require('http'); 
        http.createServer(self.handleStaticHttpConnection).listen(8000);

        console.log('Server running at http://127.0.0.1:8000/. Open your browser with http://127.0.0.1:8000/index.html');

        io.sockets.on("connection", function (socket) {
            self.handleSocketConnection(socket);
        });
    }

    /**
     * We implement a simple protocol that listens to savePlayer request with a JSON payload
     * @param socket
     */
    this.handleSocketConnection = function (socket) {
        socket.on("saveNewPlayer", function (data) {
            var rody = new SoccerPlayer({ name: data.name, club: data.club, playerNumber: data.playerNumber, isSuspended: false });
            rody.save(function (err) {
                console.log('done');
                socket.emit("saveReady", rody.toJSON());
            });
        });
    }

    this.handleStaticHttpConnection = function(req, res) {    
        var path = require('path'),
            fs = require('fs'),
            util = require('util');

        var root = "../client",
            url = "",
            contentType = "text/plain",
            filePath = "";
     
        if (req.method !== 'GET') { //If the request method doesn't equal 'GET'
            res.writeHead(405); //Write the HTTP status to the response head
            res.end('Unsupported request method', 'utf8'); //End and send the response
            return;
        }
     
        if ('.' + req.url !== './') {
            filePath = root + req.url;
            fs.exists(filePath, serveRequestedFile);      
        } else {
            res.writeHead(400);
            res.end('A file must be requested', 'utf8');
            return;
        }   
     
        function serveRequestedFile(file) {
            if (file === false) {
                res.writeHead(404); 
                res.end(); 
                return;
            }
     
            var stream = fs.createReadStream(filePath);
     
            stream.on('error', function(error) {
                res.writeHead(500);
                res.end();
                return;
            });
     
            var mimeTypes = {
                '.js' : 'text/javascript',
                '.css' : 'text/css',
                '.gif' : 'image/gif'
            };
     
            contentType = mimeTypes[path.extname(filePath)];    
     
            res.setHeader('Content-Type', contentType);
            res.writeHead(200);
     
            util.pump(stream, res, function(error) {
                //Only called when the res is closed or an error occurs
                res.end();
                return;
            });
     
        }         
    }
}

var server = new Server();
server.start();