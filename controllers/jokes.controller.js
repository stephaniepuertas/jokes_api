const Joke = require("../models/jokes.model")

//create
module.exports.createJoke =(req, res) => {
    //this is a mongoose command
    Joke.create(req.body) // this is your form 
        .then(newJoke => {
            console.log(newJoke)
            res.json(newJoke) //successful scenario-->we create a new joke
        })
        .catch(errors => res.json(errors)) // unsuccessful scenario --> if validations fail or if you forget one of the keys
}

//read all 
module.exports.findallJokes =(req,res) => {
    Joke.find()
        .then(allJokes => res.json(allJokes))
        .catch(errors => res.json(errors))
}

//read one
module.exports.findOne = (req, res) => {
    Joke.findOne({_id: req.params.joke_id})
        .then(oneJoke => res.json(oneJoke))
        .catch(errors => res.json(errors))
}

//update
module.exports.updateJoke = (req, res) => {
    Joke.findByIdAndUpdate({_id:req.params.joke_id}, req.body,{new:true, runValidators:true} )// new: true brings back new updated and runvalidator re reruns validations
        .then(updatedJoke => res.json(updatedJoke))
        .catch(errors => res.json(errors))
}

// delete
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id:req.params.joke_id})
        .then(confirmation => res.json(confirmation))
        .catch(errors => res.json(errors))
}