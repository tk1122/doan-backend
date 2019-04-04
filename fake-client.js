const client = require("socket.io-client");
const socket = client.connect("http://192.168.1.5:3484");

// socket.emit("enterRequest", "242352362464363");

// socket.on("enterResponse", res => {
//   console.log(res);
// });

socket.emit("exitRequest", "242352362464363");

socket.on("exitResponse", res => {
  console.log(res);
});
