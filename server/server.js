const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const path = require("path");


const app = express();
const router = express.Router();


// Setup logging.
app.use(morgan("dev"));


// Setup cookie-parser.
app.use(cookieParser());


// Setup body-parser to handle POST requests.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Setup method-override to handle PUT requests.
app.use(methodOverride());


// Setup static resources.
app.use(express.static("public"));


// Routes
router.get("/", (req, res, next) =>
{
    res.render("index", { title: "Express" });
});

app.use(router);


// 404
app.use((req, res, next) =>
{
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});


// Error handler
app.use((err, req, res, next) =>
{
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
});


const server = app.listen(8081, () => console.log("server listening on port " + server.address().port));
