const mongoose = require("mongoose")

//define schema

const JokeSchema = new mongoose.Schema({
    //defining what database should look like:
    //attributes of things within schema
    setup:{                      // set object
        type:String,             // object type
        required:[true, "Setup is required"], //for validations
        minlength:[10, "Setup must be at least 10 characters long"]//validation

    },
    punchline:{
        type:String,
        required:[true, "Punchline is required"], //for validations
        minlength:[3, "Punchline must be at least 3 characters long"]
    }
    // ,
    // age: {
    //     type:Number
    // },
    // tropical: {
    //     type: Boolean
    // }
}, {timestamps:true}); //if you dont put this your created at and updated at wont exist in schema

//register schema into the actual models of database
// joke is singular but when added into collection get stored as plural 

const Joke= mongoose.model('Joke,', JokeSchema);

module.exports = Joke;