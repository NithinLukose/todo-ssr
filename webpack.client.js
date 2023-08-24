const path = require("path");
module.exports = {
  entry: "./src/client/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                { targets: { browsers: ["last 2 versions"] } },
              ],
              "@babel/preset-react",
            ],
          },
        },
      },
    ],
  },
};
