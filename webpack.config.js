// CREATE WEBPACK SETUP 
  // Used to reduce the number of requests on the client side to reduce resources spend by 
  // packaging assets and creating a single bundle that is output on the page. Also,   
  // recognizes when to re-bundle when changes are made to local areas of the code. 
// REFERENCES: https://webpack.js.org
    //https://www.youtube.com/watch?v=ytRnPV0kRN0&list=PL4cUxeGkcC9iTQ3J5oa6orDIMQKKxl8dC

// DEPENDENCY: 
const path = require("path");
const webpack = require("webpack");
//const HtmlWebpackPlugin = require("html-webpack-plugin");

// DEFINE ENTRY/OUPUT/CONDITIONS: 
module.exports = {
  // Defines the entry point
  entry: path.join(__dirname, "./client/src/index.js"),

  // Defines the output point
  output: {
    path: path.join(__dirname, "./client/dist"),
    filename: "bundle.js",
  },

  // Defines the rules of how the client side files are bundled and dumped into the output point
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, "./client/src"),
        loader: "babel-loader",
        query: {
          presets: ["react", "env"],
          plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"]
        }
      },
      {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js",".jsx"]
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "./server/static/index.html"
  //   })
  // ],
  
  // Trigers to re-bundle when changes are made to the src file
  watch: false
};