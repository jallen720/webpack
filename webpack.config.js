var path = require("path");


const CLIENT_DIR = path.join(__dirname, "client");
const CLIENT_JS_DIR = path.join(CLIENT_DIR, "js");


module.exports =
{
    entry: path.join(CLIENT_JS_DIR, "main.js"),
    output:
    {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    module:
    {
        loaders:
        [
            {
                test: /\.scss$/,
                include: [ path.join(CLIENT_DIR, "scss") ],
                use:
                [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.js$/,
                include: [ CLIENT_JS_DIR ],
                loader: "babel-loader"
            }
        ]
    }
};
