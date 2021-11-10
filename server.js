const http=require("http");

//Network or server related must lie on server.js
const app=require("./Backend/app");
const server=http.createServer(app);
server.listen(3000,()=>{
    console.log("The Server is started Check the port 3000");
});
