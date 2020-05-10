const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const dev = process.env.NODE_DEV !== "production"; //true false

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler(); //part of next config

const config = require("config");
const uri = config.get("mongoURI");

const userRouter = require("./routes/users");
const todosRouter = require("./routes/todos");
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established succesfully ");
});
nextApp
    .prepare()
    .then(() => {
        const app = express();
        app.use(express.static("client"));
        app.use(cors());
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.get("*", (req, res) => {
            return handle(req, res); // for all the react stuff
        });
        app.listen(PORT, (err) => {
            if (err) throw err;
            console.log(`ready at http://localhost:${PORT}`);
        });

        app.use("/users", userRouter);
        app.use("/todos", todosRouter);
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });
