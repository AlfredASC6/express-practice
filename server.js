let express = require('express');

let app = express();
let server = app.listen(3000); 

app.use(express.static('public'));

console.log("This better work")

let socket = require('socket.io'); 

let io = socket(server);

io.sockets.on('connection', newConnection)

function newConnection(socket) {
    console.log('new connection: ' + socket.id)

    app.io = io
    socket.on('mouse', MouseMsg);

    function MouseMsg (data) {
        socket.broadcast.emit('mouse', data);
        console.log(data);
    }
}
