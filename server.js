// import dependencies
const express = require("express")
const cors = require("cors")

// instantiate express server 
const app= express()
const PORT = 8000

// setup middleware
require("./config/mongoose.config")

app.use(express.json())// responds in json
app.use(express.urlencoded({extended:true}))
app.use(cors())//accept application from other places

// connect routes
const jokeRoutes= require("./routes/jokes.routes")
jokeRoutes(app)

// start
app.listen(PORT, ()=> console.log(`EXPRESS RUNNING ON PORT ${PORT}`))
