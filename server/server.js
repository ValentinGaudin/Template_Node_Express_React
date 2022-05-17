require('dotenv').config()

const port = process.env.PORT;
const express = require("express");
const cors = require("cors");
const app = express();
const errorMiddleware = require("./src/service/middleWareError.js")
const ProductRouter = require("./routes/ProductRouter.js")
const ExampleRouter = require("./routes/ExampleRouter.js");

class Server {
    constructor(path) {
        this.path = path
    }
}
async function init() {

    Server = new Server("/api")
    
    console.log('Wait connection');

    //Middleware
    app.use(express.urlencoded({ extended: true}))
    app.use(express.json())
    app.use(cors())
    app.use(express.static(__dirname + "/public"));
    app.use(errorMiddleware.errorMiddleware)

    //Routes
    app.use("/api", ProductRouter)
    app.use("/api", ExampleRouter)

    //Start Server
    app.listen(port, () => console.log(`🚀  Server ready at ${port}`));
}
init();