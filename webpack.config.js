var path = require("path");


module.exports =
{
    entry: "./src/main.js",
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
                loader: "style-loader!css-loader"
            },
            {
                test: path.join(__dirname, "src"),
                loader: "babel-loader"
            }
        ]
    }
};
