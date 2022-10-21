const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ManishRB21:Manish%40123@cluster1.qhga3xo.mongodb.net/StudentAPI?retryWrites=true&w=majority", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(()=> {
    console.log("connected");
}).catch((e) => {
    console.log("not connected");
});