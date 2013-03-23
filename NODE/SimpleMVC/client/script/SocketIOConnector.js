/**
 * Small wrapper around Socket.IO
 * @constructor
 */
function SocketIOConnector(formHandler)
{
    // Create a Socket.IO connection on port 1337
    var socket = io.connect('http://localhost:1337');
    // Notify the formHandler that we're ready when the server's ready
    socket.on('saveReady', function (data) {
        formHandler.saveReady();
    });

    /**
     * Posts a message to the socket with some data (preferably JSON)
     * @param message
     * @param data
     */
    this.post = function(message, data)
    {
        socket.emit(message, data);
    }
}