const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const config = {
  target: "node",
  entry: "./src/server/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
};

module.exports = merge(commonConfig, config);
