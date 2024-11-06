const express=require("express");
const session=require("express-session");
const bodyParser=require("body-parser");
const path=require("path");

const app = express();

//middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    secret:'mySecretKey',
    resave:false,
    saveUninitialized:true
}));

//set up a static directory for serving HTML
app.use(express.static(path.join(__dirname,"public")));

//dummy credentials for demostration
const users = {
    username:"username",
    password:"password"
};

app.get("/",(req,res)=>{
    if(req.session.loggedIn){
        res.send(`<h1>welcome ${req.session.username}</h1><a href="/logout">`)
    }
    else{
        res.sendFile(path.join(__dirname,"public","login.html"));
}
});

app.post("/login",(req,res)=>
{
    const{username,password}=req.body;
    if(username===users.username && users.password)
    {
        req.session.loggedIn=true;
        req.session.username=username;
        res.redirect("/");
    }
    else
    {
        res.send("<h1>invalid username or password</h1><a href='/'>try again</a>");
    }
});
app.get("/logged",(req,res)=>
{
    req.session.destroy((err)=>{
        if(err)throw err;
        res.redirect("/");
    });
});

const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`server os running on port ${PORT}`);
    });
