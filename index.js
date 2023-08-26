import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))


app.get("/", (req, res) => {
    res.render("index.ejs")
})



var workTask = []
app.get("/work", (req, res) => {
    res.render("workTask.ejs", {workTask: workTask})
})

app.post("/work", (req, res) => {
    var task = req.body.task
    var add = req.body.add
    var remove = req.body.remove
    
    if(add) {
        workTask.push(task)
    }

    if (remove) {
        workTask.pop(task)
    }
    res.render("workTask.ejs", {workTask: workTask})
    
})

// DAY TODO LIST


var dayTask = [];
app.get("/day", (req, res) => {
    res.render("dayTask.ejs", {dayTask: dayTask})
})


app.post("/day", (req, res) => {
    var task = req.body.task
    var add = req.body.add
    var remove = req.body.remove

    if(add) {
        dayTask.push(task)
    }

    if (remove) {
        dayTask.pop(task)
    }
    res.render("dayTask.ejs", {dayTask: dayTask, task: task})
})








app.listen(port, () => {
    console.log("The server is running on port " + port + "...")
})