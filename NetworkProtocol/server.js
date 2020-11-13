const express = require('express');
const app = express();

//to accept json as the request body
app.use(express.json());

const port = process.env.PORT;

app.listen(port, () => console.log(`Listening on port ${port}.`));

//app.listen(3000, () => console.log(`Listening on port 3000.`));


app.get('/hello', (req,res)=>{
    console.log('Headers', req.headers);
    console.log('Method', req.method);
    //res.send('Received GET request \n');
    res.send(`Hello from port ${port}. \n`);
});

app.post('/hello',(req,res)=>{
    console.log('Headers', req.headers);
    console.log('Method', req.method);
    console.log('Body',req.body);
    res.send('Received POST request\n');
});

