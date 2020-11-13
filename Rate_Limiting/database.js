const database = {
    ['index.html']: '<html>Hello World!</html>'
};

//what do u want to do after u get the value 
//corresponding to this key is what callback does
//This call back will be passed by whomever uses this get function
module.exports.get = (key, callback) => {
    setTimeout(()=>{
        callback(database[key]);
    },1000);
};