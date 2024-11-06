
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


const path=require("path");
const fs=require("fs");
fs.writeFile(path.join(__dirname,"/api","api.txt"),"User Name:Varghese",(err)=>{
    if(err) throw err;
});
console.log(fs);