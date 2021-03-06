const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const CLIENT_DIR = path.join(__dirname, "client");
const CLIENT_JS_DIR = path.join(CLIENT_DIR, "js");
const join = path.join;


module.exports =
{
    entry: join(CLIENT_JS_DIR, "main.js"),
    output:
    {
        path: join(__dirname, "public"),
        filename: "bundle.js"
    },
    module:
    {
        loaders:
        [
            {
                test: /\.scss$/,
                include: [ join(CLIENT_DIR, "scss") ],
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
            },
            {
                test: /\.pug$/,
                include: [ path.join(CLIENT_DIR, "pug") ],
                loader: "pug-loader"
            }
        ]
    },
    plugins:
    [
        new HtmlWebpackPlugin()
    ]
};
