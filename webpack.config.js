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
                test: /\.css$/,
                include: [ path.join(APP_DIR, "css") ],
                loader: "style-loader!css-loader"
            },
            {
                test: /\.js$/,
                include: [ path.join(APP_DIR, "js") ],
                loader: "babel-loader"
            }
        ]
    }
};
