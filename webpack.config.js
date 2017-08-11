var path = require("path");


const APP_DIR = path.join(__dirname, "app");


module.exports =
{
    entry: "./app/js/main.js",
    output:
    {
        path: __dirname,
        filename: "bundle.js"
    },
    module:
    {
        loaders:
        [
            {
                test: /\.scss$/,
                include: [ path.join(APP_DIR, "scss") ],
                use:
                [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.js$/,
                include: [ path.join(APP_DIR, "js") ],
                loader: "babel-loader"
            }
        ]
    }
};
