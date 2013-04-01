$(document).ready(function () {
    // Initialize WebSocket 
    var ws = io.connect('http://localhost:1740');
    ws.on('connect', function () {
        ws.on('previousSlide', function () {
            console.log("previousSlide");
        });
        ws.on('nextSlide', function () {
            console.log("nextSlide");
        });

        $('#next').click(function () {
            ws.emit('nextSlide', {message: "nextSlide"});
        });
        $('#prev').click(function () {
            ws.emit('previousSlide', {message: "previousSlide"});
        });
    });

});
