const express = require("express");
require("./db/conn");
const Student = require("./models/student");
const app = express();
app.use(express.json());

app.post("/",function(req, res){
    res.send("home");
})

app.post("/student",(req, res) => {
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

app.listen(3000, function(){
    console.log("server sarted");
});