const client = require("socket.io-client");
const socket = client.connect("http://192.168.1.6:3484");

socket.emit("enterRequest", 456456452222);

socket.on("enterResponse", res => {
  console.log(res);
});

// socket.emit("exitRequest", 456456452222);

// socket.on("exitResponse", res => {
//   console.log(res);
// });
