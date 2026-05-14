const http = require('http');

http.createServer((req,res)=>{
    res.write("Version 2 deployed 🔥");
    res.end();
}).listen(3000);

console.log("Server running...");

