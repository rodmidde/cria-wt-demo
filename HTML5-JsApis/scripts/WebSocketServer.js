var sys = require("sys");

function Logger() {
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
                , (d.getTime() + "").substr(-4, 4)
            ].join(':')
        ].join(' ');
    };

    this.log = function(msg) {
        sys.puts(timestamp() + ' - ' + msg.toString());
    }
};

function Server() {
    var port = 1740;
    var presentorId;
    var totalConnections = 0;
    var logger = new Logger();


    this.start = function () {
        var io = require("socket.io").listen(port);
        io.sockets.on('connection', function (conn) {
            totalConnections++;

            if (!presentorId) {
                presentorId = conn.id;
            }

            conn.on('nextSlide', function(message) {
                console.log('received: %s', message);
                conn.broadcast.emit('nextSlide',message);
            });

            conn.on('previousSlide', function(message) {
                console.log('received: %s', message);
                conn.broadcast.emit('previousSlide',message);
            });

            conn.on('disconnect', function () {
                logger.log("closed connection: " + conn.id);

                if (conn.id == presentorId) {
                    conn.send("Presentor disconnected...");
                }

                totalConnections--;
                conn.send(presentorId, "Connection closed (total of: " + totalConnections + ")");
            });
        });
    }
}

var server = new Server();
server.start();