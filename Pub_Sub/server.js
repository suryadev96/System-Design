const express = require('express');
const expressWs = require('express-ws');

const app = express();
expressWs(app);

const sockets = {};

app.use(express.json());

app.listen(3001, () => {
    console.log('Listening on port 3001');
});

app.post('/:topicId', (req,res) => {
    const {topicId} = req.params;

    const message = req.body;

    //if there are no sockets available for this topicId .
    //Initialize empty array of sockets
    const topicSockets = sockets[topicId] || [];

    for (const socket of topicSockets){
        socket.send(JSON.stringify(message));
    }
});

//This gets called when a subscriber creates a new web socket to a topicId
app.ws('/:topicId', (socket,req) => {

    const {topicId} = req.params;

    if (!sockets[topicId]) sockets[topicId] = [];

    const topicSockets = sockets[topicId];
    topicSockets.push(socket);

    socket.on('close', ()=>{
        topicSockets.splice(topicSockets.indexOf(socket),1);
    });
});