const http  = require('http');


// creating a server
const myServer = http.createServer((request,res) =>
{
  res.write("Welcome");
  res.end();
  console.log("http://localhost:5000");

})

myServer.listen(5000);