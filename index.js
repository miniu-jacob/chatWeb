// HTTP를 통해서 서버를 만들고 웹소켓을 얹고, DB APP을 올린다. 

const {createServer} = require("http");
const app = require("./app")
// 웹소켓을 만들어야 함d
const {Server} = require("socket.io");
// 19번 라인에서 process.env 를 쓰니까 dotenv를 가져와야 한다. 
require("dotenv").config();


const httpServer = createServer(app);
// input & output 

// io가 회색으로 되어 있음 (글씨 혹은 변수가 회색으로 되어 있는 경우 사용하지 않고 있는 상태를 나타냄)
const io =  new Server(httpServer, {
    cors:{
        origin: "http://localhost:3000"
    }
})

// 서버를 틀어놔야 함
require("./utils/io")(io);

httpServer.listen(process.env.PORT, ()=> {
    console.log("server listening on port", process.env.PORT)
});
