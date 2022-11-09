const mongoose = require("mongoose")

//define schema

const JokeSchema = new mongoose.Schema({
    //defining what database should look like:
    //attributes of things within schema
    setup:{                      // set object
        type:String             // object type
    },
    punchline:{
        type:String
    },
    age: {
        type:Number
    },
    tropical: {
        type: Boolean
    }
}, {timestamps:true}); //if you dont put this your created at and updated at wont exist in schema

//register schema into the actual models of database
// joke is singular but when added into collection get stored as plural 

const Joke= mongoose.model('Joke,', JokeSchema);

module.exports = Joke;