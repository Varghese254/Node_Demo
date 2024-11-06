const http=require("http");
const fs=require("fs");
const path=require("path");
const server=http.createServer((req,res)=>{
    let filepath='';
    let contentType='text/html';

    switch(req.url){
        case '/':
            filepath=path.join(__dirname,"views","index.html");
            break;
            case "/contact":
                filepath=path.join(__dirname,"views","contact.html");
                break;
            default:
                filepath=path.join(__dirname,"views","404.html");
                break;
    }

    fs.readFile(filepath,"utf8",(err,data)=>{
        if(err){
            res.writeHead(500,{"contentType":"text/plain"})
            return res.end("server error")
        }
            res.writeHead(200,{"content-Type":contentType});
            res.end(data);
        
    });
});

const PORT=process.env.PORT||3001;
server.listen(PORT,()=>console.log(`server is runnning on ${PORT}`))