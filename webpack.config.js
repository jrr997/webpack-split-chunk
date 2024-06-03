const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool: false,
  output: {
    path: path.resolve(__dirname, "./dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 0,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 0,
      cacheGroups: {
        common: {
          test: /util/,
          priority: 10,
          reuseExistingChunk: true,
          name: "common",
        },
        // default: false
        // default: {
        // 	minChunks: 1,
        // 	priority: -20,
        // 	reuseExistingChunk: true,
        // }
      },
    },
  },
};
