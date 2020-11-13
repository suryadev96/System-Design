//generates random integers - use that to generate ID for our messages
function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports.getRandomInt = getRandomInt;