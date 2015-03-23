var webpack = require("webpack");

module.exports = {
  target: "web",
  debug: true,
  devtool: "source-map",
  entry: {
    app: ["webpack-dev-server/client?http://localhost:6666", "./src/main.js"]
  },
  output: {
    path: "./build",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.scss$/, loader: "style!css!sass" }
    ]
  }
};