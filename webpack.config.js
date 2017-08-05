var path = require("path");


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
                include: [ path.join(__dirname, "app", "css") ],
                loader: "style-loader!css-loader"
            },
            {
                test: /\.js$/,
                include: [ path.join(__dirname, "app", "js") ],
                loader: "babel-loader"
            }
        ]
    }
};
