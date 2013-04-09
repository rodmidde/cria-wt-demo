/**
 * This servers differs a little bit from SimpleServer:
 * - it returns data instead of putting the answer on the socket with an own message
 * - see FormHandler.js in the client to see how this effects the client code
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
        // Due to our folder structure we need to add /../ before accessing the client folder that serves as
        // document root and web root
        connect().use(connect.static(__dirname + "/../client")).listen(8000);

        io.sockets.on("connection", function (socket) {
            self.handleSocketConnection(socket);
        });
    }

    /**
     * We implement a simple protocol that listens to savePlayer request with a JSON payload
     * @param socket
     */
    this.handleSocketConnection = function (socket) {
        socket.on("saveNewPlayer", function (data, callbackfn) {
            var newPlayer = new SoccerPlayer({ name: data.name, club: data.club, playerNumber: data.playerNumber, isSuspended: false });
            newPlayer.save(function (err) {
                console.log('done');
                // This call will set the JSON representation of the saved object as a "return" value
                callbackfn(newPlayer.toJSON());
            });
        });
    }
}

var server = new Server();
server.start();