module.exports = {
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            ["env", { targets: { browsers: ["last 2 versions"] } }],
            "react",
            "stage-0"
          ]
        }
      },
      {
        test: /\.svg$|\.ttf?|\.woff$|\.woff2|\.eof|\.eot|\.png/,
        loader: "file-loader"
      },
    ]
  }
};