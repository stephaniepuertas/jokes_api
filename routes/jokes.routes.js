const JokeController = require("../controllers/jokes.controller")
const Joke= require("../models/jokes.model")

//routes going to export a function that is going to define our routes
module.exports = app => {

    //create
    app.post("/api/jokes/new", JokeController.createJoke ) 

    //read all 
    app.get("/api/jokes", JokeController.findallJokes)

    //read one
    app.get("api/jokes/:joke_id", JokeController.findOne )
    
    //update
    app.put("/api/jokes/:joke_id", JokeController.updateJoke )
    
    //delete
    app.delete("api/jokes/:joke_id", JokeController.deleteJoke)
}