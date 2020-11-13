const axios = require('axios')
const WebSocket = require('ws')

// Creates a WebSocket with the server
function createMessagingSocket(){
    return new WebSocket('ws://localhost:3001/messages');
}

//get all the messages in the chat app from our server
function getMessages(){
    return axios.get('http://localhost:3001/messages').then(res => res.data);
}

//send the actual message to the server
function sendMessage(message){
    return axios.post('http://localhost:3001/messages',message);
}

module.exports.createMessagingSocket = createMessagingSocket;
module.exports.getMessages = getMessages;
module.exports.sendMessage = sendMessage;