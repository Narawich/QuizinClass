const express = require("express")
const mongoose = require("mongoose")
const app = express()
const mongodburi = "mongodb+srv://administer1150:0858881292Get@quizinclass.1kaqp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(mongodburi)
    .then(result => {
        app.listen(5000, () => console.log("Server start at Port 5000"))
    })
    .catch(Error => console.log(Error))