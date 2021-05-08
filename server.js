const app = require('express')();

const server = require('http').createServer(app);

const {Server} = require('socket.io');

const io = new Server(server);

io.on('connection',(socket)=>{
    socket.on('chat',(msg)=>{
        io.emit('chat',msg);
    })
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

server.listen(3000,()=>console.log('server is up and running....'));