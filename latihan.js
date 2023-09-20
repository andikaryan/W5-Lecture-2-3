const http = require('http');

const server = http.createServer((req, res) =>{
    res.write("Hello world");
    res.end();
});

const port = 3000;
server.listen(port, ()=>{
    console.log(`Server dah jalan di ${port}`)
});