
// console.log(__filename);
// console.log(__dirname);
// const path=require("path");
// console.log(path.basename(__filename));

// const path2=require("path");
// console.log(path2.extname(__filename));

// const path3=require("path")
// console.log(path3.dirname(__filename));

// const path=require("path");
// const fs=require("fs");
// fs.mkdir(path.join(__dirname,"/api"),(err)=>{
//     if(err)console.log(err);
// });
// console.log(fs);


// const path=require("path");
// const fs=require("fs");
// fs.mkdir(path.join(__dirname,"/api2/api3"),{recursive:true},(err)=>{
//     if(err)console.log(err);
// });


// const path=require("path");
// const fs=require("fs");
// fs.rmdir(path.join(__dirname,"/api2"),{recursive:true},(err)=>{
//     if(err) throw err;
// });
// console.log(fs)


// const path=require("path");
// const fs=require("fs");
// fs.writeFile(path.join(__dirname,"/api","api.txt"),"User Name:Varghese",(err)=>{
//     if(err) throw err;
// });
// console.log(fs);



// const EventEmmiter=require("events");
// const emitter=new EventEmmiter();
// emitter.on("message",(data)=>{
//     console.log(data);
// });
//    emitter.on("logout",(data)=>
// {
//     console.log(data);
// });
// emitter.emit("message","Hello");
// emitter.emit("logout","user logged out");


// const EventEmmiter=require("events");
// const emitter=new EventEmmiter();
// const user="user1"
// emitter.on("message",(data)=>{
//     console.log(data);
// });
//    emitter.on("logout",(data)=>
// {
//     console.log(data);
// });
// emitter.emit("message",`Hello",${user}`);
// emitter.emit("logout","user logged out");



// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// emitter.on("request", (req) => {
//     console.log(`Received request for ${req.url}`);
//     if (req.url === "/error") {
//         emitter.emit("error", new Error("An error occurred"));
//     } else {
//         console.log(`Processing request for ${req.url}`);
//     }
// });

// emitter.on("error", (err) => {
//     console.log(`Error occurred: ${err.message}`);
// });

// // Emit the 'request' event instead of 'message'
// emitter.emit("request", { url: "/home" });
// emitter.emit("request", { url: "/about" });
// emitter.emit("request", { url: "/error" });






const path=require("path");
const fs=require("fs");
fs.mkdir(path.join(__dirname,"/api2"),(err)=>{
    if(err)console.log(err);
});

fs.mkdir(path.join(__dirname,"/api2/api4"),{recursive:true},(err)=>{
    if(err)console.log(err);
});

fs.rmdir(path.join(__dirname,"/api2/api4"),{recursive:true},(err)=>{
    if(err) throw err;
});
fs.writeFile(path.join(__dirname,"/api2","sample.txt"),"User Name:Varghese",(err)=>{
    if(err) throw err;
});




