require('dotenv').config();
const path = require("path");
const webpack = require("webpack");
const outputPath = path.resolve(__dirname, "public");

module.exports = {
  mode: "development",
  entry: "./src/Index.tsx",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: outputPath,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "FIREBASE_API_KEY": JSON.stringify(process.env.FIREBASE_API_KEY),
        "FIREBASE_AUTH_DOMAIN": JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        "FIREBASE_DATABASE_URL": JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        "FIREBASE_PROJECT_ID": JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        "FIREBASE_STORAGE_BUCKET": JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        "FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
        "FIREBASE_APP_ID": JSON.stringify(process.env.FIREBASE_APP_ID),
        "FIREBASE_MEASUREMENT_ID": JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID),
      }
    })
  ],
  devServer: {
    contentBase: outputPath,
  },
};
