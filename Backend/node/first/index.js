
const express = require("express")
const app = express()
const moment = require('moment');


const {createServer} = require("node:http")
const {Server} = require("socket.io")
const server = createServer(app)
const path = require("path");

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

const port = 5002

const db = require("./Server/config/db")

app.use(express.static(path.join(__dirname, "Server", "public")));


app.use(express.json())
app.use(express.urlencoded())

const router = require("./Server/routes/ApiRoutes")

app.get("/",(req , res) =>{
  return res.sendFile(path.join(__dirname, "Server", "public", "index.html"));
  
})

io.on("connection", (socket) => {

    console.log("User connected:", socket.id);

    socket.on("private-message", ({ receiverId, message }) => {

        console.log("Message:", message);
        console.log("Receiver:", receiverId);

        // Send ONLY to receiver
        io.to(receiverId).emit("private-message", {
            senderId: socket.id,
            message: message
        });

    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });

});

// io.on("connection", (socket) =>{
//     console.log("A user connected "+ socket.id);
    
//     socket.on("message" , (msg) =>{
//         console.log(msg);
//         io.emit("message" , msg)
        
//     })

//        socket.on("disconnect", () => {
//         console.log("User disconnected:", socket.id);
//     });
// })


app.use("/api", router)

server.listen(port, (err) =>{
    if(err){
        console.log("error in server");
        
    }else{
        console.log("server is running ");
        
    }
})