module.exports = function(io){
    // IO... 
    io.on("connection", async(socket)=> {
        console.log("client is connected", socket.id)
    })
};


// IO를 어디서 받아오나? 매개변수로 받아온다. 
/* IO 함수에서는 두가지 함수를 제공함. 
    1. 말하는 함수: .emit()
    2. 듣는 함수: .on()


*/