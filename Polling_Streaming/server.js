const express = require('express');
const expressWs = require('express-ws');

const app = express();
expressWs(app);

//store chat messages in memory
const messages = [{id : 0, text: 'Welcome!', username: 'Chat Room'}];
// to support multiple users connecting to our chat app with sockets
const sockets = [];

app.use(express.json());

app.listen(3001, () => {
    console.log('Listening on port 3001!');
});

app.get('/messages', (req,res) => {
    res.json(messages);
});

app.post('/messages', (req,res) => {
    const message = req.body;
    messages.push(message);

    for (const socket of sockets){
        socket.send(JSON.stringify(message));
    }
});

app.ws('/messages', socket => {
    sockets.push(socket);

    //on close event listener in case if client closes the socket connection
    socket.on('close', () => {
        sockets.splice(sockets.indexOf(socket), 1);
    });
});