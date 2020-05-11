const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== "production"; //true false
const { createServer } = require("http");
const { parse } = require("url");

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
        createServer((req, res) => {
            const parsedUrl = parse(req.url, true);
            const { pathname, query } = parsedUrl;
            if (pathname === "a") app.render(req, res, "b", query);
            else if (pathname === "b") app.render(req, res, "a", query);
            else handle(req, res, parsedUrl);
        });
        app.get("/", (req, res) => {
            return app.render(req, res, "/", req.query);
        });

        app.get("/dashboard", (req, res) => {
            return app.render(req, res, "/dashboard", req.query);
        });

        app.use(express.static("out"));
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
